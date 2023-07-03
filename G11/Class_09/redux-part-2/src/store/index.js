import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { productsReducer } from "./reducers/productsReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  // rest of reducers of our app.
});

const composedEnchancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnchancer);

export default store;
