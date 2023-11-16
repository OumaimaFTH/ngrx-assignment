import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeeState } from "./reducers/coffee.reducers";

import * as fromCoffees from "./reducers/coffee.reducers"
export const selectCoffeeState = createFeatureSelector<CoffeeState>("coffees");

export const selectAllCoffees = createSelector(
    selectCoffeeState,
    fromCoffees.selectAll
)

export const areCoffeesLoaded = createSelector(
    selectCoffeeState,
    state=>state.allCoffeesLoaded
)


export const selectCoffeeById  = (coffeeId:number)=>createSelector(
    selectAllCoffees,
    coffees =>coffees.find(coffee =>coffee.id== coffeeId)
)