import Button from "../Button/Button";
import { useState } from "react";

function CounterHooks(props) {
  // Left side of the return of useState is the piece of state that we want to define and the right side is the funciton that we use to set that piece of state, this applies to all cases when we want to have state in a react funcitonal component
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(prevCount => {
      if (prevCount >= 10) return prevCount;
      return prevCount + 1;
    });
  };

  const remove = () => {
    setCount(prevCount => {
      if (prevCount === 0) return prevCount;
      return prevCount - 1;
    });
  };

  return (
    <div className="counter">
      <div>{props.title}</div>
      <div className="counter-display">{count}</div>
      <div className="counter-controls">
        <Button btnText="Remove 1" onBtnClick={remove} />
        <Button btnText="Add 1" onBtnClick={add} />
      </div>
    </div>
  );
}

export default CounterHooks;
