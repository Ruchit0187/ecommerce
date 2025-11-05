import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuantityApidata } from "../Types/Types";

interface storeType {
  task: QuantityApidata[];
  totalQuantity: number;
}

const initialState: storeType = {
  task: [],
  totalQuantity: 0,
};

const Cartreducer = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addTocart(state, action: PayloadAction<QuantityApidata>) {
      const item = state.task.find((curr) => curr.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.task.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeToCart(state, action: PayloadAction<number>) {
      const item = state.task.find((curr) => curr.id == action.payload);
      if (item) {
        state.totalQuantity = state.totalQuantity - item.quantity;
      }
      state.task = state.task.filter((curr) => curr.id !== action.payload);
    },
    removeQuantity(state, action: PayloadAction<QuantityApidata>) {
      const item = state.task.find((curr) => curr.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else if (item.quantity === 1) {
          state.task = state.task.filter(
            (curr) => curr.id !== action.payload.id
          );
        }
      }
      state.totalQuantity--;
    },
    clearToCart(state) {
      state.task = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addTocart, removeToCart, clearToCart, removeQuantity } =
  Cartreducer.actions;
export const CartReducer = Cartreducer.reducer;
