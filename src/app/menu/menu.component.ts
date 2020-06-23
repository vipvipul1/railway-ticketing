import { Component, OnInit } from '@angular/core';
import { SimpleAuthenticationService } from '../app-service/authentication/simple-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public simpleAuthenticationService: SimpleAuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
