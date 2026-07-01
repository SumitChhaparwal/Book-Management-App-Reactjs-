import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const bookStore = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

export default bookStore;
