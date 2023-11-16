import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import { selectCoffeeById } from 'src/app/shared/store/coffees.selectors';
import { AppState } from 'src/app/shared/store/reducers';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent {
  coffeeDetail$!: Observable<Coffee | undefined>;
  itemId: any;


  constructor(
     private store: Store<AppState>, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.itemId = params['id']; 
      this.reload();
    });
   
  }
reload() {

  this.coffeeDetail$ = this.store.pipe(
    select(selectCoffeeById(this.itemId))
  )
}
}
