import { cartReducer } from "./reducers/cartReducer";
import productsReducer from "./reducers/productsReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
