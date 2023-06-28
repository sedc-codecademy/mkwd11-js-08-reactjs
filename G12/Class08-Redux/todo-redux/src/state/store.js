import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
