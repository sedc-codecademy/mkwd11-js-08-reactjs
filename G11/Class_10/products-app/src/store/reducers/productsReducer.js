import { api_request } from "../../utils/apiRequest";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
};
//immer
export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,

  reducers: {
    productsFetchingStarted: (state) => {
      state.isLoading = true;
    },

    productsFetched: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export const { productsFetchingStarted, productsFetched } =
  productsSlice.actions;

export default productsSlice.reducer;

// thunk actions
export const fetchProducts = async (dispatch, getState) => {
  console.log("get state: ", getState());
  try {
    dispatch(productsFetchingStarted());
    const data = await api_request(
      "https://fakestoreapi.com/products?limit=10"
    );
    console.log(data);
    dispatch(productsFetched(data));
  } catch (error) {
    console.log(error);

    // Here we can dispatch action
    // that will set error property in the state for example
  }
};
