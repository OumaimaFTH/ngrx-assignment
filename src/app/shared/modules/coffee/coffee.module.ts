import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from 'src/app/coffees/coffee/coffee.component';
import { CoffeeResolver } from '../../store/coffee.resolver';
import { MaterialModule } from '../material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeHttpService } from 'src/app/services/coffee-http.service';
import { CoffeesEffects } from '../../store/coffees.effects';
import { coffeesReducer } from '../../store/reducers/coffee.reducers';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeCardListComponent } from 'src/app/coffees/coffee-card-list/coffee-card-list.component';

export const coffeesRoutes: Routes = [
  {
    path: '',
    component: CoffeeCardListComponent,
    resolve:{
      coffees:CoffeeResolver
    }},
    
  {
    path: ':id',
    component: CoffeeComponent
  }
  

  
];


@NgModule({
  declarations: [CoffeeCardListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(coffeesRoutes),
    StoreModule.forFeature("coffees", coffeesReducer),
    EffectsModule.forFeature([CoffeesEffects]),
  ],
  exports: [
    CoffeeCardListComponent
  ],
  providers:[CoffeeHttpService,
  CoffeeResolver]
})
export class CoffeeModule { }
