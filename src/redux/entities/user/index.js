
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { getUserById, getUsers } from "./thunks/get-users";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: 'user',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getUserById.fulfilled, (state, { payload }) => {
                entityAdapter.upsertOne(state, payload);
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            });
    }
});



