import Button from "../Button/Button";
import "./TodoItem.css";

const TodoItem = ({ todo, onTodoClick }) => {
  return (
    <li className="TodoItem">
      <span style={{ textDecoration: todo.isFinished && "line-through" }}>
        {todo.todoText}
      </span>
      <Button
        onBtnClick={() => {
          onTodoClick(todo.id);
        }}
        btnText={todo.isFinished ? "❌" : "✅"}
      />
    </li>
  );
};

export default TodoItem;
