import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
});

export default store;
