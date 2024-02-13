import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds, selectReviewById } from "../selectors"; 
// import { selectReviewByRestaurantId } from "../../redux/entities/restaurant/selectors";; 

export const getReviews = createAsyncThunk(
    'reviews/getReviews', async () => {
    const response = await fetch('http://localhost:3001/api/reviews');
    const result = await response.json();
    return result;
},
    { condition: (_, { getState }) => !selectReviewIds(getState())?.length }
);

export const getReviewById = createAsyncThunk(
    'reviews/getReviewById',
    async (reviewId) => {
        const response = await fetch(`http://localhost:3001/api/review/${reviewId}`);
        const result = await response.json();
        return result;
    },
    // {
    //     condition: (reviewId, { getState }) => {
    //         const review = selectReviewById(reviewId)(getState()); 
    //         return review ? false : true;
    //     }
        
    // }
);

export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviewsByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        const result = await response.json();
        return result;
    },
    {
        // condition: (restaurantId, { getState }) => {
        //     const reviews = selectReviewByRestaurantId(restaurantId)(getState()); 
        //     return reviews ? false : true;
        // }
        
    }
);

