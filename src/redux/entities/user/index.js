import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalized-mock";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        entities: normalizedUsers.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
        }, {}),
        ids: normalizedUsers.map(({ id }) => id),
    },
});

// import { createSlice, createEntityAdapter  } from "@reduxjs/toolkit";

// import { getUserById } from "./thunks/get-users";

// const entityAdapter = createEntityAdapter();

// export const userSlice = createSlice({
//     name: 'user',
//     extraReducers: (builder) => {
//         builder
//             .addCase(getUserById.fulfilled, (state, { payload }) => {
//                 entityAdapter.upsertOne(state, payload);
//             });
//     }
// });



