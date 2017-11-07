import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  passed = false;
  constructor(public router: Router) {
    console.log("content.passed=" + this.passed);
  }
  
  ifPassed() {
    this.passed = LoginComponent.passed;
    console.log("content.passed=" + this.passed);
    return this.passed;
  }

  navigate() {
    if (this.passed)
      this.router.navigate(['/profile']);
  }
  
  ngOnInit() {
  }

}
