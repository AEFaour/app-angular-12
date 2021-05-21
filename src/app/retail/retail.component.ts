import { Component, OnInit } from '@angular/core';
import data from '../../assets/MOCK_DATA.json';
import { Car } from '../models/car.model';


@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {

  items: Car[] = data;
  constructor() { }

  ngOnInit(): void {
    console.log(data);
   // this.items= data as Car[];
    console.log(this.items);
  }

  shareCallback(dogName: string): void{
    console.log(dogName);
  }

}
