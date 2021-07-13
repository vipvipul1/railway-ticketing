import { Component, OnInit } from '@angular/core';
// import { DataService } from '../app-service/helper/data.service';
import { Train } from '../app-model/train.model';

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.css']
})
export class TicketSummaryComponent implements OnInit {

  trainObj: Train;
  bookingClass: { id: number, className: String };
  journeyDate: Date;

  pname: String[];
  age: number[];
  gender: any[];
  preference: any[];
  food: any[];

  constructor(
    // private dataService: DataService
  ) { }

  ngOnInit(): void {
    // this.pname = this.dataService.getStorage().pname;
    // this.age = this.dataService.getStorage().age;
    // this.gender = this.dataService.getStorage().gender;
    // this.preference = this.dataService.getStorage().preference;
    // this.food = this.dataService.getStorage().food;

    // console.log(this.pname);
    // console.log(this.age);
    // console.log(this.gender);
    // console.log(this.preference);
    // console.log(this.food);
  }

}
