import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    AboutComponent,
    NotfoundComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        // redirectTo: '/profile',
        // pathMatch: 'full'
        component: ContentComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ])
  ],
  providers: [
    LoginService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
