import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthenticationService {

  constructor() { }

  checkAuthCredentials(username, password) {
    if (username == 'vipul' && password == 'pass') {
      sessionStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('username');
  }

  isUserLoggedIn() {
    if (this.getAuthenticatedUser()) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('username');
  }

}
