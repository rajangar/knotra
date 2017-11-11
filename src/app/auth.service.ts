import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private cookieService: CookieService) {
  }

  login(userid: string, password: string): Observable<boolean> {
    let status = false;
    if (userid == "rajan" && password == "garg") {
      status = true;
      this.isLoggedIn = true;
      this.cookieService.set('userid', userid);
      this.cookieService.set('password', password);
      console.log('1.cookie:UserId=' + this.cookieService.get('userid') + ',pwd=' + this.cookieService.get('password'));
    } else {
      status = false;
      this.isLoggedIn = false;
    }
    return Observable.of(status).delay(1000).do(val => this.isLoggedIn = status);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.cookieService.delete('userid');
    this.cookieService.delete('password');
  }

  checkCookie(): void {
    console.log('2.cookie:UserId=' + this.cookieService.get('userid') + ',pwd=' + this.cookieService.get('password'));
    if(!this.cookieService.check('userid') || !this.cookieService.check('password')) {
      this.isLoggedIn = false;
    }
    if(this.cookieService.check('userid') && this.cookieService.check('password')) {
      this.login(this.cookieService.get('userid'), this.cookieService.get('password'));
    }
  }
}
