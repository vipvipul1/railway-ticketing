import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainSummaryService {
  private trainSummary: any;

  constructor() { }

  public setSummary(trainSummary: any) {
    this.trainSummary = trainSummary;
  }

  public getSummary(): any {
    return this.trainSummary;
  }
}
