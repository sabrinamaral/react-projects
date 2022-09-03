const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newList = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newList };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((item) => {
        if (
          item.id === action.payload.id &&
          action.payload.type === "increase"
        ) {
          return { ...item, amount: item.amount + 1 };
        }
        if (
          item.id === action.payload.id &&
          action.payload.type === "decrease"
        ) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += price * amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  throw new Error("no matching action type");
};

export default reducer;
