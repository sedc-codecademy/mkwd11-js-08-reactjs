const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      const filteredCart = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      return {
        ...state,
        cartItems: filteredCart,
      };
    default:
      return state;
  }
};
