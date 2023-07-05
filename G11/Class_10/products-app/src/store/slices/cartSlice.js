import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // here the payload is going to be object
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    // here the payload is going to be id
    removeFromCart: (state, { payload }) => {
      console.log(payload);

      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
