const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, product: [...action.payload] };

    case "ADD_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      };

    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((p) =>
          p.id === action.payload.id ? (p.qty = action.payload.qty) : p.qty
        ),
      };

    default:
      return state;
  }
};

export default reducer;
