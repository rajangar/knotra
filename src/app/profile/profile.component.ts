import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  searchQuery: string;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.checkCookie();
    this.searchQuery = '';
  }

   logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  search() {
    this.router.navigate(['/search']);
  }

  ngOnInit() {
  }

}
