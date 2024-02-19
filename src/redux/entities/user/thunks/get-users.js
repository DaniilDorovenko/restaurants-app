import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserById, selectUserIds } from "../selectors";

export const getUserById = createAsyncThunk(
    'users/getUserById',
    async (userId) => {
        const response = await fetch(`http://localhost:3001/api/users/${userId}`);
        const result = await response.json();
        return result;
    },
    {
        condition: (userId, { getState }) => {
            const user = selectUserById(userId)(getState());
            return user ? false : true;
        }

    }
);

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const response = await fetch(`http://localhost:3001/api/users/`);
        const result = await response.json();
        return result;
    },
    { condition: (_, { getState }) => !selectUserIds(getState())?.length }

);

