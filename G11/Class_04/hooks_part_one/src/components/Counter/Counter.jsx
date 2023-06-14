import { useState } from "react";

const Counter = () => {
  //1. variable for state 2.setter function to change the state; 3. 10 is the default value
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("#dfcf20");
  const [message, setMessage] = useState("Some message");

  const handleIncrement = () => {
    if (count === 20) return;
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handlerChangeColor = (colorValue) => {
    setColor(colorValue);
  };

  /**
   * create message state and input, and as you type
   * change the state of message. the message state should take the place of the content of p
   */

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to React Hooks</h1>
      <h3>Count is: {count}</h3>
      <div>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button> */}

        {/* WITH HANDLER FUNCTIONS */}

        {/* Example when passing reference to the function */}
        <button onClick={handleIncrement}>Increment</button>

        {/* Example when we use callback, good when we need to provide
            argument in the handler function
        */}
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>

      <hr />
      <br />
      <p style={{ color: color }}>{message}</p>
      <input
        type="color"
        onChange={(event) => handlerChangeColor(event.target.value)}
        value={color || ""}
      />

      <br />
      <input type="text" onChange={handleChangeMessage} />
    </div>
  );
};

export default Counter;
