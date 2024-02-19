import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserById } from "../selectors"; 

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

