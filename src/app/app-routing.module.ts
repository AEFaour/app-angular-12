import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentComponent } from './retail/authent/authent.component';
import { RetailComponent } from './retail/retail.component';
import { RetailModule } from './retail/retail.module';

const routes: Routes = [
  {path: '', redirectTo : 'authent', pathMatch: 'full'},
  {path: 'authent', component : AuthentComponent, pathMatch: 'full'},
  {path: 'list', component: RetailComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
