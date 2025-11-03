import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuantityApidata } from "../Types/Types";

interface storeType {
  task: QuantityApidata[];
}

const initialState: storeType = {
  task: [],
};

const Cartreducer = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addTocart(state, action: PayloadAction<QuantityApidata>) {
      const item=state.task.find((curr)=>curr.id===action.payload.id);
      if(item){
        item.quantity+=1
      }
      else{
      state.task.push({...action.payload,quantity:1})
      }
    },
    removeToCart(state, action: PayloadAction<number>) {
      state.task = state.task.filter((curr) => curr.id !== action.payload);
    },

    clearToCart(state) {
      state.task = [];
    },
  },
});

export const { addTocart, removeToCart, clearToCart } =
  Cartreducer.actions;
export const CartReducer = Cartreducer.reducer;
