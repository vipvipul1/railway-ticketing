import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../app-service/authentication/simple-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public simpleAuthService: SimpleAuthService
  ) { }

  ngOnInit(): void {
  }

}
