//Define the initial state
const initialState = {
  count: 0,
  inputNumber: 10,
};

/**
 *
 * @param {*} state
 * state argument holds the value of the state
 * the reducer will only change the values of this state
 * @param {*} action
 * will be argument that is object
 * will look like: {type: "INCREMENT"}
 * will have 2 properties
 * one is called type
 * and the second one is called and is optional payload
 * and it can look as: {type: "SET_NUMBER", payload: 22}
 */
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    //if value of action.type is INCREMENT
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "SET_NUMBER":
      console.log(action);
      return {
        ...state,
        inputNumber: action.payload,
      };
    default:
      return state;
  }
};
