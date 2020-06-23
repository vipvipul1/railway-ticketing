import { Component, OnInit } from '@angular/core';
import { SimpleAuthenticationService } from '../app-service/authentication/simple-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  errorMessage = '';

  constructor(
    private simpleAuthenticationService: SimpleAuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    const status = this.simpleAuthenticationService.checkAuthCredentials(this.username, this.password);
    if (status == true) {
      this.invalidLogin = false;
      this.errorMessage = '';
      this.router.navigate(['homepage', this.username]);
    } else {
      this.invalidLogin = true;
      this.errorMessage = 'Invalid Credentials!';
      setTimeout(() => {
        this.invalidLogin = false;
      }, 3000);
    }
  }

}
