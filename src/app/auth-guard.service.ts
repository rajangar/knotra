import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    console.log("url = " + url)

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    this.authService.checkCookie();
    if (url == "/") {
      if (!this.authService.isLoggedIn) { return true; }  
    } else {
      if (this.authService.isLoggedIn) { return true; }
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    // let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    // let navigationExtras: NavigationExtras = {
      // queryParams: { 'session_id': sessionId },
      // fragment: 'anchor'
    // };

    // Navigate to the login page with extras
    //this.router.navigate(['/login'], navigationExtras);
    let replaceURL: string;
    if(url == "/") {
      //replaceURL = url.replace("home", "profile");
      replaceURL = "/profile";
      this.router.navigate([replaceURL]);
    } else if(url.startsWith("/profile")) {
      //replaceURL = url.replace("profile", "home");
      replaceURL = "/";
      this.router.navigate([replaceURL]);
    }
    return false;
  }
}
