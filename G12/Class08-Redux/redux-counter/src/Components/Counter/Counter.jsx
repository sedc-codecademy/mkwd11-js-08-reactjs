import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import "./Counter.css";
// What is imported below are functions that create valid actions objects, therefore they need to be called when used in dispatch otherwise it will not work ex: dispatch(increment()) -- CORRECT , dispatch(increment) - INCORRECT
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../../state/slices/counterSlice";

const Counter = () => {
  // when using specific pieces of the state from the store, we extract only the ones that we need
  const counter = useSelector(state => {
    // Whenever the state changes then the selector callback is called which changes the state that we are reading and it is therefore causing the component to be rerendered and the ui to be updated.
    // console.log("from the use selector", state);
    console.log("use selector called");

    return state.counter;
  });

  //   Dispatch is called with actions to tell reducers what to do
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <div className="display">{counter.value}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          btnText="Remove 5"
          //   When calling an action creator function with a value, that value is the payload that is received in the correct reducer function in the slice
          onBtnClick={() => dispatch(decrementByAmount(5))}
        />
        <Button
          btnText="Remove 1"
          style={{ backgroundColor: "lightpink" }}
          onBtnClick={() => dispatch(decrement())}
        />
        <Button
          btnText="Add 1"
          style={{ backgroundColor: "lightgreen" }}
          onBtnClick={() => dispatch(increment())}
        />
        <Button
          btnText="Add 5"
          onBtnClick={() => dispatch(incrementByAmount(5))}
        />
      </div>
    </div>
  );
};

export default Counter;
