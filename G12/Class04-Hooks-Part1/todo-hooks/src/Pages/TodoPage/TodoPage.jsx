import { useState } from "react";
import TodoList from "../../Components/TodoList/TodoList";
import "./TodoPage.css";
import { v4 as uuid } from "uuid";
import Button from "../../Components/Button/Button";
import TodoInput from "../../Components/TodoInput/TodoInput";

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

const TodoPage = () => {
  const [todos, setTodos] = useState(
    JSON.parse(JSON.stringify(starterTodoData))
  );

  const onTodoClick = todoId => {
    console.log("On Todo Clicked");
    const foundTodo = todos.find(todo => todo.id === todoId);

    if (foundTodo.isFinished) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== foundTodo.id));
    }

    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === foundTodo.id) {
          todo.isFinished = true;
          return todo;
        }

        return todo;
      });
    });
  };

  const resetTodos = () => {
    setTodos(JSON.parse(JSON.stringify(starterTodoData)));
  };

  const addTodo = todoText => {
    console.log("Add todo called with value: ", todoText);

    const newTodo = {
      todoText,
      isFinished: false,
      id: uuid(),
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  console.log("Todo Page Rerendered");

  return (
    <div className="TodoPage">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} onTodoClick={onTodoClick} />
      <div className="controls">
        <Button btnText="Reset Todos for Dejan" onBtnClick={resetTodos} />
      </div>
    </div>
  );
};

export default TodoPage;
