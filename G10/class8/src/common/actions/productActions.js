import { ADD_TO_CART, FETCH_PRODUCTS } from "../const/productActions.const";

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
