import { Component, OnInit } from '@angular/core';
import { Router,
  NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid: string;
  password: string;
  constructor(private authService: AuthService, public router: Router) { 
    this.userid = '';
    this.password = '';
  }

  onSubmit() {

    this.authService.login(this.userid, this.password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

        this.router.navigate([redirect]);
      }
    });

  }

  ngOnInit() {
  }

}
