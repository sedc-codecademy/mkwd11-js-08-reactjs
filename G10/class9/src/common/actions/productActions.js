import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
  SET_CATEGORIES,
  SET_SEARCH_TERM,
  SET_SELECTED_CATEGORIES,
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

export const setCategories = products => {
  const categories = [...new Set(products.map(product => product.category))];

  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

export const setSelectedCategories = selectedCategories => {
  return {
    type: SET_SELECTED_CATEGORIES,
    payload: selectedCategories,
  };
};
