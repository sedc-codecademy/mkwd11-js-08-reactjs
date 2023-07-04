import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
  SET_CATEGORIES,
  SET_SEARCH_TERM,
  SET_SELECTED_CATEGORIES,
} from "../const/productActions.const";

const initialState = {
  products: [],
  cartItems: [],
  searchTerm: "",
  categories: [],
  selectedCategories: [],
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
          ...state.cartItems,
          state.products.find(product => product.id === action.payload),
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
