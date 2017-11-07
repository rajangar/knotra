import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  userid = '';
  password = '';

  constructor() { }

  setLogin(id: string, pwd: string) {
    this.userid = id;
    this.password = pwd;
  }

  loginPassed() {
    if (this.userid == "rajan" && this.password == "garg") {
      return true;
    } else {
      return false;
    }
  }

}
