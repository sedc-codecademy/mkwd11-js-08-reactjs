import { useState, useCallback } from "react";
import { CounterContolls } from "../CounterControlles/CounterControlles";

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // *** WITHOUT USECALLBACK ***

  // const increment = () => {
  //   // setCount(count + 1);
  //   // setCount(() => count + 1);

  //   // prevCount is the value of the state (count) before the update =)
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // *** WITH USECALLBACK ***

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);

    // setCount(count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>usecallback example</h1>

      <h2>Count: {count}</h2>

      <CounterContolls increment={increment} decrement={decrement} />

      <hr />
      <br />
      <div>
        <input type="text" value={text} onChange={handleChangeText} />
        <p>TEXT: {text}</p>
      </div>
    </div>
  );
};
