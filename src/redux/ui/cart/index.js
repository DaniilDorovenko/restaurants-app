import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, { payload: productId }) => {
      state[productId] = (state[productId] || 0) + 1;
    },
    decrement: (state, { payload: productId }) => {
      state[productId] = (state[productId] || 0) - 1;

      if (state[productId] <= 0) {
        delete state[productId];
      }
    },
  },
  selectors: {
    selectDishAmountById: (state, dishId) => state[dishId] || 0,
    selectDishAmount: (state) =>
      Object.values(state).reduce((acc, amount) => {
        return acc + amount;
      }, 0),
    selectCartDishIds: (state) => Object.keys(state),
  },
});

export const {
    selectDishAmountById,
    selectDishAmount,
    selectCartDishIds,
} = cartSlice.selectors;
export const { increment, decrement } = cartSlice.actions;