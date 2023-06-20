import { useReducer } from "react";

const initialState = {
  passengers: 0,
  children: 0,
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action) {
    case "increment-passengers":
      return { ...state, passengers: state.passengers + 1 };
    case "decrement-passengers":
      return { ...state, passengers: state.passengers - 1 };
    case "increment-children":
      return { ...state, children: state.children + 1 };
    case "decrement-children":
      return { ...state, children: state.children - 1 };
    default:
      return state;
  }
};

export default function PassengersList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3 style={{ flexBasis: "100%" }}>
        Passengers: {state.passengers}| Children: {state.children}
      </h3>
      <div style={{ flexBasis: "100%" }}>
        <button onClick={() => dispatch("increment-passengers")}>
          Add Passenger
        </button>
        <button
          disabled={state.passengers === 0}
          onClick={() => dispatch("decrement-passengers")}
        >
          Remove Passenger
        </button>
        <button onClick={() => dispatch("increment-children")}>
          Add Child
        </button>
        <button
          disabled={state.children === 0}
          onClick={() => dispatch("decrement-children")}
        >
          Remove Child
        </button>
      </div>
    </>
  );
}
