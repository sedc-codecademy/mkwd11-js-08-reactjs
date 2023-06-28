import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  console.log(todos);

  return (
    <div className="TodoList">
      <h3>Todos List</h3>
      {todos.value.length < 1 && <div>No Todos</div>}
      {todos.value.length > 0 && (
        <ul>
          {todos.value.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
