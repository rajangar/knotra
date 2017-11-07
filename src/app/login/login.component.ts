import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cookieValueUserId = '';
  cookieValuePassword = '';
  submitted = false;
  static passed = false;
  constructor(private loginService: LoginService, private cookieService: CookieService, private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted=' + this.submitted + ',userid=' + this.loginService.userid + ',pwd=' + this.loginService.password);
    this.loginService.setLogin(this.loginService.userid, this.loginService.password);
    if (this.loginService.loginPassed()) {
      LoginComponent.passed = true;
      this.cookieService.set('userid', this.loginService.userid);
      this.cookieService.set('password', this.loginService.password);
    }
    console.log("Passed:" + LoginComponent.passed);
    console.log('cookie:UserId=' + this.cookieService.get('userid') + ',pwd=' + this.cookieService.get('password'));
  }

  ngOnInit() {
    if(this.cookieService.check('userid') && this.cookieService.check('password')) {
      this.submitted = true;
      this.loginService.userid = this.cookieService.get('userid');
      this.loginService.password = this.cookieService.get('password');
      this.onSubmit();
    }
  }

  checkCookie() {
    if(!this.cookieService.check('userid') || !this.cookieService.check('password')) {
      this.submitted = false;
      LoginComponent.passed = false;
    }
  }

  loginPassed() {
    return LoginComponent.passed;
  }

}
