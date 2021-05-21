import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RetailComponent } from './retail.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthentComponent } from './authent/authent.component';

@NgModule({
  declarations: [
    RetailComponent,
    ItemComponent,
    SummaryComponent,
    AuthentComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RetailComponent, AuthentComponent],
})
export class RetailModule {}
