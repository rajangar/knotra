import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  results: string;

  constructor(private cookieService: CookieService, private http: Http) {
  }

  login(userid: string, password: string): Observable<boolean> {
    let status = false;
    
    if (userid == "rajan" && password == "garg") {
    //   let postapi = "http://localhost:3000/api/addUser";
    //   this.http.post(postapi,{
    //     "userid" : userid,
    //     "password" : password
    //  }).subscribe();
 
    //    this.http.request("http://localhost:3000/api/getUser").
    //    subscribe(res => {
    //     res.json().data.map( e => {
    //       console.log("userid: ", e.userid + ",password: " + e.password);
    //     } );
    //   });
     
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
    if(!this.isLoggedIn && this.cookieService.check('userid') && this.cookieService.check('password')) {
      this.login(this.cookieService.get('userid'), this.cookieService.get('password'));
    }
  }
}
