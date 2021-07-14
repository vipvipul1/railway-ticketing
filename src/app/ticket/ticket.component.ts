import { Component, OnInit } from '@angular/core';

export class Ticket {
  constructor(
    public source: string,
    public destination: string,
    public trainClass: string,
    public journeyDate: Date
  ) { }
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
