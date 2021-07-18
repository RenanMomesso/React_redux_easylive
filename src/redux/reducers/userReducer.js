import {
  USER_CART,
  REMOVE_ITEM_CART,
  CLEAR_CART_PURCHASE,
} from "../constants/userTypes";

const initialState = {
  cart: [],
  quantity: 0,
  total: 0,
};

export default (state = initialState, action) => {
  let cart = [...state.cart];
  let quantity = state.quantity;

  switch (action.type) {
    case USER_CART:
      let id = action.product.idProduct;
      let index = cart.findIndex((item) => item.idProduct == id);
      if (index > -1) {
        cart[index].qt += action.product.qt;
      } else {
        cart.push({
          ...action.product,
        });
        quantity++;
      }
      return { ...state, cart, quantity };

    case REMOVE_ITEM_CART:
      return {
        ...state,
        cart: cart.filter((item) => item.idProduct != action.product.idProduct),
        quantity: state.quantity - 1,
      };

    case CLEAR_CART_PURCHASE:
      return {
        ...state,
        cart: [],
        quantity: 0,
      };

    default:
      return state;
  }
};
