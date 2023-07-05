import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      state.todos = filteredTodos;
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
