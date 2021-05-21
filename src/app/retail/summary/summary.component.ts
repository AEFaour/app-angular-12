import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  car: Car;
  constructor(private storeService : StoreService) { }

  ngOnInit(): void {
    this.storeService.getObservable().subscribe((data) => {this.car = data});
    /* this.car = this.storeService.data;
    console.log(this.storeService.data); */
  }

/*   fetchData():void{
    this.car = this.storeService.data;
  } */

}
