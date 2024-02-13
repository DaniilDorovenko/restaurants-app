import { configureStore, combineSlices  } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { dishSlice } from "./entities/dish";
import { requestSlice } from "./ui/requset";
import { cartSlice } from "./ui/cart";

export const store = configureStore({
    reducer: combineSlices(
        restaurantSlice, 
        reviewSlice, 
        userSlice, 
        dishSlice,
        requestSlice,
        cartSlice,
        ),
});

// console.log(store.getState());