import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countriesSlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
