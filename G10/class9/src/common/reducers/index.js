import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  shop: productReducer,
  auth: authReducer,
});

export default rootReducer;
