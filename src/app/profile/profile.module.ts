import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent }           from './profile.component';
import { ProfilePageComponent }           from '../profile-page/profile-page.component';
import { LoginComponent }           from '../login/login.component';
import { ContentComponent }           from '../content/content.component';
import { AboutComponent }             from '../about/about.component';
import { NotfoundComponent }             from '../notfound/notfound.component';
import { ContactComponent }             from '../contact/contact.component';

import { ProfileRoutingModule }       from './profile-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ProfilePageComponent,
    ContentComponent,
    AboutComponent,
    NotfoundComponent,
    ContactComponent,
    LoginComponent
  ]
})
export class ProfileModule {}