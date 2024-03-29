import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../app-service/authentication/simple-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private simpleAuthService: SimpleAuthService
  ) { }

  ngOnInit(): void {
    this.simpleAuthService.logout();
  }

}
