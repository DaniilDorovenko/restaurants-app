import { createSlice, createEntityAdapter  } from "@reduxjs/toolkit";

import { getReviewById, getReviews, getReviewsByRestaurantId } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getReviews.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
            .addCase(getReviewById.fulfilled, (state, { payload }) => {
                entityAdapter.upsertOne(state, payload);
            })
            .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            });
    }
});