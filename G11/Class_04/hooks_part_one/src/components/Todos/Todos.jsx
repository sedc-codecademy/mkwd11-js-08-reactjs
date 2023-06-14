import { useState } from "react";
import { Todo } from "../Todo/Todo";
import { TodosOptions } from "../TodosOptions/TodosOptions";

const Todos = () => {
  const initialTodos = [
    { id: 1, title: "Walk the dog", isDone: false },
    { id: 2, title: "Read a book", isDone: false },
    { id: 3, title: "Make dinner", isDone: true },
  ];

  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeTodoTitle = (value) => {
    setTodoTitle(value);
  };

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      title: todoTitle,
      isDone: false,
    };

    console.log("Todo created: ", todo);

    // initialTodos.push(todo);
    // console.log("todos array: ", initialTodos);

    // FIX
    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (todoId) => {
    if (todos.length === 0) {
      alert("Todos is empty");
      return; // exit the execution of this function
    }

    // filter out todos that we want to keep
    // take out the one what has the matching todoId
    const remainingTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(remainingTodos);
  };

  const handleFinishTodo = (todoId) => {
    const todosUpdated = todos.map((todo) => {
      if (todo.id === todoId && !todo.isDone) {
        return {
          ...todo,
          isDone: true,
        };
      }
      return todo;
    });

    setTodos(todosUpdated);
  };

  return (
    <>
      <h1>Todos</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {todos.map((todo) => (
          <Todo
            handleRemoveTodo={handleRemoveTodo}
            handleFinishTodo={handleFinishTodo}
            key={todo.id}
            title={todo.title}
            isDone={todo.isDone}
            id={todo.id}
          />
        ))}
      </div>

      <hr />
      <br />
      <h3>Adding Todo</h3>

      <TodosOptions
        handleAddTodo={handleAddTodo}
        handleChangeTodoTitle={handleChangeTodoTitle}
      />
    </>
  );
};

export default Todos;
