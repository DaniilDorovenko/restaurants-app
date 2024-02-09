import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";

import { getDishes } from "./thunks/get-dishes";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState:  entityAdapter.getInitialState(),
    extraReducers: (builder) =>
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
    }),
});

