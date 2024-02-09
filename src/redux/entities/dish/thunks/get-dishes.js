import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesByRestaurantId } from "../selectors"

export const getDishes = (restaurantId) => createAsyncThunk(
    "restaurant/getRestaurants",
    async () => {

        const response = await fetch("http://localhost:3001/api/dishes?restaurantId=:" + { restaurantId });

        return response.json();
    },
    { condition: (_, { getState }) => !selectDishesByRestaurantId(getState())?.length }
);
