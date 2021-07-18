import { USER_CART, REMOVE_ITEM_CART,CLEAR_CART_PURCHASE } from "../constants/userTypes";

export const addProduct = (product) => {
  return {
    type: USER_CART,
    product,
  };
};

export const removeProductCart = (product) => {
  return {
    type: REMOVE_ITEM_CART,
    product,
  };
};

export const clearCartPurchase = () => {
  return{
    type: CLEAR_CART_PURCHASE
  }
}
