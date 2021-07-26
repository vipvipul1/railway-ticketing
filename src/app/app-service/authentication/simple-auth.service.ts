import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthService {

  constructor() { }

  checkAuthCredentials(username, password) {
    if (username == 'vipvipul1' && password == 'vipvipul1') {
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
