import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  // IMPORTANT => THIS WAS WHEN WE HAD ONLY 1 REDUCER
  // const count = useSelector((state) => state.count);
  // const inputNumber = useSelector((state) => state.inputNumber);

  // IMPORTANT => THIS IS WHEN WE HAVE MULTIPLE REDUCERS IN OUR APP
  const count = useSelector(({ counterReducer: { count } }) => count);
  const inputNumber = useSelector((state) => state.counterReducer.inputNumber);

  const dispatch = useDispatch();

  // console.log("COUNT IS: ", count);
  // console.log("INPUT NUMBER:", inputNumber);

  const handleIncrement = () => {
    if (count === 10) return;
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleChangeInputNumber = (event) => {
    const value = Number(event.target.value);

    dispatch({ type: "SET_NUMBER", payload: value });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br />
      <hr />
      <p>Input number is: {inputNumber}</p>
      <input
        type="text"
        onChange={handleChangeInputNumber}
        placeeholder="Input Number"
        value={inputNumber}
      />
    </div>
  );
};
