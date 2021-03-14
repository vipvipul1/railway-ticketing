import { Component, OnInit } from '@angular/core';
import { Train } from '../app-model/train.model';
import { TrainService } from '../app-service/train-service/train.service';
import { Router } from '@angular/router';
import { DataService } from '../app-service/helper/data.service';

@Component({
  selector: 'app-train-search',
  templateUrl: './train-search.component.html',
  styleUrls: ['./train-search.component.css']
})
export class TrainSearchComponent implements OnInit {

  sourceList = [];
  destinationList = [];
  trainClassList = [];
  trains = [];

  source = '-- source --';
  destination = '-- destination --';
  // journeyDate: Date;               // enable this for not populating current date in date field by default
  journeyDate = new Date();
  tClass: number;
  availableTrains: Array<Train> = [];
  showTrains = false;
  errorMsg = '';

  newTrainClass: Array<number> = [];
  newFare: Array<number> = [];

  constructor(
    private trainService: TrainService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.sourceList = this.trainService.locations;
    this.destinationList = this.trainService.locations;
    this.trainClassList = this.trainService.classList;
    this.trains = this.trainService.trains;

    this.tClass = this.trainClassList[0].id;
  }

  searchTrain() {
    // console.log(this.source + ', ' + this.destination + ', ' + this.journeyDate + ', ' + this.trainClass);
    if (this.source === this.destination) {
      this.errorMsg = 'Source and Destination cannot be same!';
      this.showTrains = false;
      return;
    } else {
      this.errorMsg = '';
    }

    this.availableTrains = [];
    this.newTrainClass = [];
    this.newFare = [];
    this.journeyDate = new Date(this.journeyDate);
    const jDay = new Date(this.journeyDate).getDay();
    for (const train of this.trains) {
      if (train.source == this.source && train.destination == this.destination) {
        for (const day of train.journeyDay) {
          if (day.id == jDay) {
            if (this.tClass == 0) {
              this.availableTrains.push(train);
              break;
            }
            for (const cls of train.trainClass) {
              if (cls.id == this.tClass) {
                this.availableTrains.push(train);
              }
            }
          }
        }
      }
    }

    if (this.availableTrains.length !== 0) {
      this.showTrains = true;
      this.errorMsg = '';
      for (const [index, train] of this.availableTrains.entries()) {
        this.newTrainClass[index] = 0;
        this.newFare[index] = train.fare[0];
      }
    } else {
      this.showTrains = false;
      this.errorMsg = 'No Trains Found!';
    }
  }

  getFare(index: number) {
    this.newFare[index] = this.availableTrains[index].fare[this.newTrainClass[index]];
  }

  bookTicket(index: number) {
    const train = this.availableTrains[index];
    const bookingClass = this.availableTrains[index].trainClass[this.newTrainClass[index]];
    this.dataService.setStorage({ train, bookingClass, journeyDate: this.journeyDate });

    this.router.navigate(['passengerform']);
  }

}
