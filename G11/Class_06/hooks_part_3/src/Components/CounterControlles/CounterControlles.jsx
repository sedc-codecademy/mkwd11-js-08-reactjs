import { memo } from "react";

export const CounterContolls = memo(({ increment, decrement }) => {
  console.log("COUNTER CONTROLLS COMPONENT");

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
});
