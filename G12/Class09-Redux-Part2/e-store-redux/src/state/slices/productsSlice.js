import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsMockData from "../../data/products.json";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: productsMockData,
  },
  reducers: {
    addToCart(state, action) {
      const selectedProduct = action.payload;

      state.value.forEach(product => {
        if (product.id === selectedProduct.id) {
          product.inCart = true;
          return;
        }
      });

      localStorage.setItem("products", JSON.stringify(state.value));
    },
    removeFromCart(state, action) {
      const selectedProduct = action.payload;

      state.value.forEach(product => {
        if (product.id === selectedProduct.id) {
          product.inCart = false;
          return;
        }
      });

      localStorage.setItem("products", JSON.stringify(state.value));
    },
    loadProductsFromLocalStorage(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        console.log(action);
        console.log("products data is pending");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action);
        state.value = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action);
        console.log("products data error");
      });
  },
});

export const { addToCart, removeFromCart, loadProductsFromLocalStorage } =
  productsSlice.actions;
export default productsSlice.reducer;
