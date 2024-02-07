import { configureStore, combineSlices  } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { dishSlice } from "./entities/dish";

export const store = configureStore({
    reducer: combineSlices(restaurantSlice, reviewSlice, userSlice, dishSlice),
});

// console.log(store.getState());