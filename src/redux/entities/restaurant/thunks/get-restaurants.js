import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors"
// import { selectRestaurantById } from "../selectors";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants",
    async () => {
        console.log('restaurants thunk')
        const response = await fetch("http://localhost:3001/api/restaurants/");

        return response.json();
    },
    { condition: (_, { getState }) => !selectRestaurantIds(getState?.length) }
);

// export const getRestaurant = (restaurantId) => createAsyncThunk(
//     "restaurant/getRestaurant",
//     async () => {
//         const response = await fetch("http://localhost:3001/api/restaurants/:" + {restaurantId});

//         return response.json();
//     },
//     { condition: (_, { getState }) => !selectRestaurantById(getState?.length) }
// );