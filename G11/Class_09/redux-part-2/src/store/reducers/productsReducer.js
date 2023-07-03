import { api_request } from "../../utils/apiRequest";

const initialState = {
  products: [],
  isLoading: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_FETCHING_START":
      return {
        ...state,
        isLoading: true,
      };

    case "PRODUCTS_FETCHED":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

// thunk actions
export const fetchProducts = async (dispatch, getState) => {
  console.log("get state: ", getState());
  try {
    dispatch({ type: "PRODUCTS_FETCHING_START" });
    const data = await api_request(
      "https://fakestoreapi.com/products?limit=10"
    );
    console.log(data);
    dispatch({ type: "PRODUCTS_FETCHED", payload: data });
  } catch (error) {
    console.log(error);

    // Here we can dispatch action
    // that will set error property in the state for example
  }
};
