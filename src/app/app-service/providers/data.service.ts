import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storage: any;

  constructor() { }

  public setStorage(storage: any) {
    this.storage = storage;
  }

  public getStorage(): any {
    return this.storage;
  }
}
