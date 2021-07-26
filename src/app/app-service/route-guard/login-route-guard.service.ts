import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SimpleAuthService } from '../authentication/simple-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardService implements CanActivate {

  constructor(
    private simpleAuthService: SimpleAuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const loginStatus = this.simpleAuthService.isUserLoggedIn();
    if (loginStatus == true) {
      this.router.navigate(['homepage', this.simpleAuthService.getAuthenticatedUser()]);
      return false;
    }
    return true;
  }

}
