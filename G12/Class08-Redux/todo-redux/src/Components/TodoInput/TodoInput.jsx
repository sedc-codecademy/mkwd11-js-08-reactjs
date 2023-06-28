import { useState } from "react";
import "./TodoInput.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../state/slices/todosSlice";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onInputSubmit = () => {
    console.log("Input value", value);

    if (value.length < 1) {
      setErrorMsg("Todo input must not be empty");
      return;
    }

    dispatch(addTodo(value));
    setErrorMsg("");
    setValue("");
  };

  return (
    <div className="Input">
      <h3>Add Todo</h3>
      <div className="controls">
        <input
          type="text"
          value={value}
          placeholder="Enter todo text"
          onChange={e => setValue(e.target.value)}
        />
        <p>
          <small>{errorMsg}</small>
        </p>
      </div>
      <Button btnText="Add Todo" onBtnClick={onInputSubmit} />
    </div>
  );
};

export default TodoInput;
