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
export class DummyGuard implements CanActivate/*, CanActivateChild, CanLoad*/ {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      this.authService.redirectUrl = url;
      this.authService.checkCookie();
      return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

//   canLoad(route: Route): boolean {
//   }

}
