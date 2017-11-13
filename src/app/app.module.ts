import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AuthGuard }                from './auth-guard.service';
import { DummyGuard }                from './dummy-guard.service';
import { AuthService }          from './auth.service';

import { ProfileModule } from './profile/profile.module';
import { MenuComponent } from './menu/menu.component';
// import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProfileModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    AuthGuard,
    DummyGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
