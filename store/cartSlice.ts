import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface CartState {
  cartItem: { title: string; price: number; count: number };
}

const initialState: CartState = {
  cartItem: { title: "", price: 0, count: 0 },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOne: (state) => {
      state.cartItem.count += 1;
    },
    subtractOne: (state) => {
      state.cartItem.count -= 1;
    },
    addToCart: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

export const { addOne, subtractOne, addToCart } = cartSlice.actions;

export const selectCount = (state: RootState) => state.cart.cartItem;

export default cartSlice.reducer;
