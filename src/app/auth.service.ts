import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

class Data {
  userid: string;
  password: string;
}

interface MyJsonData {
  //data: Data[];
  status: string;
  id: string;
}
@Injectable()
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  results: string;

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  getUser(userid: string, password: string): Observable<MyJsonData> {

    var email_criteria = false;
    if (userid.match('@')) {
      email_criteria = true;
    }
    let params1 = new HttpParams();
    if (email_criteria) {
      params1 = params1.append('email', userid);
    } else {
      params1 = params1.append('userid', userid);
    }
    params1 = params1.append('password', password);

    if(email_criteria) {
      return this.http.get<MyJsonData>("http://localhost:3000/api/getUserByEmail", {params: params1}) ;
    } else {
      return this.http.get<MyJsonData>("http://localhost:3000/api/getUserById", {params: params1}) ;
    }
  }

  login(userid: string, password: string): Observable<boolean> {
    this.getUser(userid, password).subscribe(res => {
    let status = false;
    let id = '';

    // if(res.data.length > 0)
    if(res.status == 'success') {
      status = true;
      id = res.id;
    }
  
    console.log("status: " + res.status + ",id: " + id);
    //console.log("length: " + res.data.length + ",status: " + status);
    //for(var da of res.data)
      //console.log("userid: " + da.userid + ",password: " + da.password);
    
    if (status) {
    //   let postapi = "http://localhost:3000/api/addUser";
    //   this.http.post(postapi,{
    //     "userid" : userid,
    //     "password" : password
    //  }).subscribe();
        this.cookieService.set('userid', userid);
        this.cookieService.set('password', password);
        console.log('1.cookie:UserId=' + this.cookieService.get('userid') + ',pwd=' + this.cookieService.get('password'));
      }
      //console.log('1.Loggedin: ' + this.isLoggedIn);
      this.isLoggedIn = status;
      //console.log('2.Loggedin: ' + this.isLoggedIn);
      return status;    
    
      });
      //console.log('3.Loggedin: ' + this.isLoggedIn);
      return Observable.of(false).delay(1000).do(val => this.isLoggedIn = false);
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
