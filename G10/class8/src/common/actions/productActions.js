import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
  SET_SEARCH_TERM,
} from "../const/productActions.const";

export const fetchProducts = products => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const setSearchTerm = searchTerm => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
};
