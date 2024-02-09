import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
// import { normalizedRestaurants } from "../../../../materials/normalized-mock";
import { getRestaurants } from "./thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
    }),
});

// export const restaurantSlice = createSlice({
//     name: 'restaurant',
//     initialState: {
//         entities: normalizedRestaurants.reduce((acc, restaurant) => {
//             acc[restaurant.id] = restaurant;
//             return acc;
//         }, {}),
//         ids: normalizedRestaurants.map(({ id }) => id),
//     },
// });