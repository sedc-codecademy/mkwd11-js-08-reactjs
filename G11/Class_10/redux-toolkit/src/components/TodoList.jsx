import { useSelector } from "react-redux";
import { selectTodos } from "../store/selectors/todosSelector";

export const TodoList = () => {
  // const todos = useSelector((state) => state.todo.todos);

  // Same as above but more readable
  // selectTodos is selector created in different file
  const todos = useSelector(selectTodos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </div>
  );
};
