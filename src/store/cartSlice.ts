import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  count: number;
  image: any;
};

type CartState = {
  cart: Record<string, CartItem>;
};

const initialState: CartState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      if (state.cart[action.payload.id] === undefined) {
        state.cart[action.payload.id] = action.payload;
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.cart[id].count++;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cart[id].count === 1) {
        delete state.cart[id];
      } else {
        state.cart[id].count--;
      }
    },
    removeAllItems: (state) => {
      state.cart = {};
    },
  },
});

export const selectCart = (state: RootState) => state?.cart;

const { reducer, actions } = cartSlice;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeAllItems,
} = actions;

export default reducer;
