import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  
  passed = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }
  
  ifPassed() {
    this.passed = LoginComponent.passed;
    console.log("profile.passed=" + this.passed);
    return this.passed;
  }

  ngOnInit() {
  }

}
