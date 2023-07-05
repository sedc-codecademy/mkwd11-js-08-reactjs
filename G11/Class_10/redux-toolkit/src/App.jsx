import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/slices/todoSlice";
import { TodoList } from "./components/TodoList";
import { Button, Progress } from "semantic-ui-react";
function App() {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();

  const handlerSetTodoName = (event) => {
    const text = event.target.value;

    setTodoName(text);
  };

  const handleCreateTodo = () => {
    const todoToBeCreated = {
      id: Date.now(),
      title: todoName,
    };

    dispatch(addTodo(todoToBeCreated));
    setTodoName("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={handlerSetTodoName}
        value={todoName}
      />
      <button onClick={handleCreateTodo}>Create todo</button>

      <br />
      <hr />

      <TodoList />

      {/* <Progress percent={33} indicating />
      <Button>Increment</Button> */}
    </>
  );
}

export default App;
