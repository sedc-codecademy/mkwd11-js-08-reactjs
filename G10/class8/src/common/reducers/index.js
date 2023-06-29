import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  shop: productReducer,
});

export default rootReducer;
