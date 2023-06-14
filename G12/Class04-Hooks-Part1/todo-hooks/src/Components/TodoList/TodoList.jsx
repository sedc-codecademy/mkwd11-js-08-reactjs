import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div className="TodoList">
      <h3>Todos List</h3>
      {todos.length < 1 && <div>No Todos</div>}
      {todos.length > 0 && (
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onTodoClick={onTodoClick} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
