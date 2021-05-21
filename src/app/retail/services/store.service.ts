import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from 'src/app/models/car.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  data: Car;
  private observable = new Subject<Car>();
  constructor() {}

  getObservable(): Observable<Car> {
    return this.observable;
  }

  sendData(newCar: Car): void {
    this.observable.next(newCar);
  }
}
