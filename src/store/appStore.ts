import { configureStore } from '@reduxjs/toolkit';
import cartSlice, {
  CART_PERSISTENT_STATE,
} from './slices/cartSlice';
import { saveState } from './storage';

export const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

appStore.subscribe(() => {
  saveState(
    {
      products: appStore.getState().cart.products,
    },
    CART_PERSISTENT_STATE
  );
});

export type RootState = ReturnType<
  typeof appStore.getState
>;
export type AppDispatch =
  typeof appStore.dispatch;
