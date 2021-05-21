import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  //text: string = ' mon texte';
  alt: string = 'Photo of a Shiba Inu';
  //isNameValid: boolean = true;

  @Input()
  car: Car;

  @Output()
  sigShare = new EventEmitter<string>();

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}

  getName(): string {
    return 'Bobby';
  }

  onLikeClick(): void {
    console.log('clicked and liked');
  }

  /*   delectNameValid(): boolean {
    return this.name.length > 0;
  }

  onShareClick(): void{
    this.sigShare.emit(this.name);
  } */

  generateDescription(): string {
    let carType = 'Non défini';
    let sold = this.car.sold ? 'vendu' : 'sur le marché';
    switch (this.car.type) {
      case 0:
        carType = 'Essence';
        break;
      case 1:
        carType = 'Diesel';
        break;
      case 2:
        carType = 'Hybride';
        break;
      case 3:
        carType = 'Elécrtique';
        break;
      default:
        break;
    }
    return `Cette voiture de type ${carType} et elle est ${sold}`;
  }

  storeData(): void {
    //this.storeService.data = this.car;
    this.storeService.sendData(this.car);
  }
}
