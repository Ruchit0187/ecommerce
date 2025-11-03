import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducer";

export const store=configureStore({
    reducer:CartReducer
})
console.log(store.getState())