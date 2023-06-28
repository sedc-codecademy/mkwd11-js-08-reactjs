import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { movieReducer } from "./reducers/movieReducer";

// IMPORTANT => THIS WAS WHEN WE HAD ONLY 1 REDUCER
// const store = createStore(counterReducer);

// IMPORTANT => THIS IS WHEN WE HAVE MULTIPLE REDUCERS IN OUR APP
const rootReducer = combineReducers({
  counterReducer,
  movieReducer,
});

const store = createStore(rootReducer);

export default store;
