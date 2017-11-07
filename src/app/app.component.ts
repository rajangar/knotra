import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { LoginComponent } from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passed = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }
  
  ifPassed() {
    this.passed = LoginComponent.passed;
    console.log("app.passed=" + this.passed);
    return this.passed;
  }
}
