import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SimpleAuthenticationService } from '../authentication/simple-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardService implements CanActivate {

  constructor(
    private simpleAuthenticationService: SimpleAuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const loginStatus = this.simpleAuthenticationService.isUserLoggedIn();
    if (loginStatus == true) {
      this.router.navigate(['homepage', this.simpleAuthenticationService.getAuthenticatedUser()]);
      return false;
    }
    return true;
  }

}
