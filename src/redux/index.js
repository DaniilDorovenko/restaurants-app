import { configureStore, combineSlices  } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { dishSlice } from "./entities/dish";
import { requestSlice } from "./ui/requset";

export const store = configureStore({
    reducer: combineSlices(
        restaurantSlice, 
        reviewSlice, 
        userSlice, 
        dishSlice,
        requestSlice,
        ),
});

// console.log(store.getState());