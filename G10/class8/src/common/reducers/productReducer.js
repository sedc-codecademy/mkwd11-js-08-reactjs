import { ADD_TO_CART, FETCH_PRODUCTS } from "../const/productActions.const";

const initialState = {
  products: [],
  cartItems: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          state.products.find(product => product.id === action.payload),
        ],
      };
    default:
      return state;
  }
};

export default productReducer;
