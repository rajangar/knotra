import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  passed = false;
  constructor() {
    console.log("menu.passed=" + this.passed);
  }
  
  ifPassed() {
    this.passed = LoginComponent.passed;
    console.log("menu.passed=" + this.passed);
    return this.passed;
  }
  
  ngOnInit() {
  }

}
