import { useState } from "react";
import TodoList from "../../Components/TodoList/TodoList";
import "./TodoPage.css";
import { v4 as uuid } from "uuid";
import Button from "../../Components/Button/Button";
import TodoInput from "../../Components/TodoInput/TodoInput";
import { useDispatch } from "react-redux";
import { resetTodos } from "../../state/slices/todosSlice";

const TodoPage = () => {
  console.log("Todo Page Rerendered");

  const dispatch = useDispatch();

  return (
    <div className="TodoPage">
      <TodoInput />
      <TodoList />
      <div className="controls">
        <Button
          btnText="Reset Todos for Dejan"
          onBtnClick={() => dispatch(resetTodos())}
        />
      </div>
    </div>
  );
};

export default TodoPage;
