import { createSlice } from "@reduxjs/toolkit";
import { bookArr } from "./bookData";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    bookItems: [...bookArr],
  },
  reducers: {
    addItem: (state, action) => {
      state.bookItems.unshift(action.payload);
    },
  },
});

export const{addItem} = cartSlice.actions;
export default cartSlice.reducer;