import { createAction, props } from "@ngrx/store";
import { Coffee } from "src/app/models/coffee";


export const loadAllCoffees = createAction(
    "[Coffees Resolver] Load All Coffees"
);

export const allCoffeesLoaded =createAction(
    "[Load Coffees Effect] All Coffees Loaded",
    props<{coffees:Coffee[]}>()
)

