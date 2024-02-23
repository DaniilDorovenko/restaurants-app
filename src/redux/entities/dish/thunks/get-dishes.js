import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById, selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishes = createAsyncThunk('dishes/getDishes', async () => {
    const response = await fetch('http://localhost:3001/api/dishes');
    const result = await response.json();
    return result;
},
    { condition: (_, { getState }) => !selectDishIds(getState())?.length }
);

export const getDishById = createAsyncThunk(
    'dishes/getDishById',
    async (dishId) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        const result = await response.json();
        return result;
    },
    {
        condition: (dishId, { getState }) => {
            const dish = selectDishById(dishId)(getState()); 
            return dish ? false : true;
        }
        
    }
);

export const getDishesByRestaurantId = createAsyncThunk(
    'dishes/getDishesByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        const result = await response.json();
        return result;
    },
        {
    condition: (restaurantId, { getState }) => {
        const restaurantDishIds = selectRestaurantDishIds(restaurantId)(getState());
        const dishIds = selectDishIds(getState());
        return !restaurantDishIds.every((id) => dishIds.includes(id))  
    }
  }
);
