import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import { selectAllCoffees, selectCoffeeById } from 'src/app/shared/store/coffees.selectors';
import { AppState } from 'src/app/shared/store/reducers';

@Component({
  selector: 'app-coffee-card-list',
  templateUrl: './coffee-card-list.component.html',
  styleUrls: ['./coffee-card-list.component.css']
})
export class CoffeeCardListComponent {
  totalItems = 50;
  itemsPerPage = 10;
  currentPage = 0;

  coffeeList$!: Observable<Coffee[]>;


  constructor(
     private store: Store<AppState>) {

  }

  ngOnInit() {
    this.reload();
  }
reload() {
  this.coffeeList$ = this.store.pipe(
    select(selectAllCoffees)
  );
}

calculateStartIndex() {
  return this.currentPage * this.itemsPerPage;
}

calculateEndIndex() {
  return this.calculateStartIndex() + this.itemsPerPage;
}
  

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
  }

}
