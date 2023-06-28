import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const starterTodoData = [
  {
    todoText: "Write an example todo",
    isFinished: false,
    id: uuid(),
  },
  {
    todoText: "Create a finished todo",
    isFinished: true,
    id: uuid(),
  },
  {
    todoText: "Create a todo application",
    isFinished: false,
    id: uuid(),
  },
  {
    todoText: "Reset todos",
    isFinished: false,
    id: uuid(),
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: JSON.parse(JSON.stringify(starterTodoData)),
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        todoText: action.payload,
        isFinished: false,
        id: uuid(),
      };

      state.value.push(newTodo);
    },
    finishTodo(state, action) {
      const todoId = action.payload;

      state.value = state.value.map(todo => {
        if (todo.id === todoId) {
          todo.isFinished = true;
          return todo;
        }

        return todo;
      });
    },
    removeTodo(state, action) {
      const todoId = action.payload;

      state.value = state.value.filter(todo => todo.id !== todoId);
    },
    resetTodos(state) {
      state.value = JSON.parse(JSON.stringify(starterTodoData));
    },
  },
});

export const { addTodo, finishTodo, removeTodo, resetTodos } =
  todosSlice.actions;

export default todosSlice.reducer;
