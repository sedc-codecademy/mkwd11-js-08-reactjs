import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import "./TodoItem.css";
import { finishTodo, removeTodo } from "../../state/slices/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onTodoClick = () => {
    if (!todo.isFinished) {
      // we dispatch finish todo action
      dispatch(finishTodo(todo.id));
    } else {
      // we dispatch remove todo action
      dispatch(removeTodo(todo.id));
    }
  };

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
