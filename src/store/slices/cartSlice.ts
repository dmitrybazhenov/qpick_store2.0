import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../storage';
import { IproductInCart } from '../../interfaces/productInCart.interface';

export const CART_PERSISTENT_STATE = 'userCart';

export interface UserCart {
  products: IproductInCart[] | null;
}

const initialState: UserCart = {
  products:
    loadState<UserCart>(CART_PERSISTENT_STATE)
      ?.products ?? null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!action.payload) return;
      let isAdded = false;

      if (state.products) {
        state.products = state.products?.map(
          (item) => {
            if (item.id === action.payload.id) {
              isAdded = true;
              const newQuantity =
                item.quantity + 1;
              return {
                ...item,
                quantity: newQuantity,
                totalPrice:
                  (item.totalPrice /
                    item.quantity) *
                  newQuantity,
              };
            }
            return item;
          }
        );
        if (!isAdded) {
          state.products = [
            ...state.products,
            {
              id: action.payload.id,
              quantity: 1,
              totalPrice: action.payload.price,
            },
          ];
        }
        return;
      }
      state.products = [
        {
          id: action.payload.id,
          quantity: 1,
          totalPrice: action.payload.price,
        },
      ];
    },
    decreaseProductInCart: (state, action) => {
      if (!action.payload) return;

      if (state.products) {
        const element = state.products.find(
          (item) => item.id === action.payload.id
        );
        if (element) {
          if (element.quantity === 1) {
            state.products =
              state.products.filter(
                (item) => item.id !== element.id
              );
          } else {
            state.products = state.products.map(
              (item) => {
                if (item.id === element.id) {
                  const newQuantity =
                    item.quantity - 1;
                  return {
                    ...item,
                    quantity: newQuantity,
                    totalPrice:
                      (item.totalPrice /
                        item.quantity) *
                      newQuantity,
                  };
                }
                return item;
              }
            );
          }
        }
        if (!state.products.length)
          state.products = null;
      }
    },
    deleteProductFromCart: (state, action) => {
      if (!action.payload) return;
      if (state.products) {
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
        if (!state.products.length)
          state.products = null;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
