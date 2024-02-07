import { createSlice } from "@reduxjs/toolkit";
import {
  createCart,
  deleteCart,
  getCart,
  getCarts,
  updateCart,
} from "../actions/cart.dispatch";
import { useSelector } from "react-redux";

const initialState = {
  cart: null,
  carts: [],
  // typeof window !== "undefined" && localStorage.getItem("cartItems")
  // ? JSON.parse(localStorage.getItem("cartItems"))
  // : [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const itemInCart = state.carts.find((item) => item.id === id);

      if (itemInCart) {
        itemInCart.quantity += quantity;
      } else {
        state.carts.push({ ...action.payload });
      }

      // typeof window !== "undefined" &&
      // localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.carts.find((item) => item.id === itemId);
      if (item) {
        item.quantity++;
      }

      // typeof window !== "undefined" &&
      // localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.carts.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }

      // typeof window !== "undefined" &&
      // localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
    removeItem: (state, action) => {
      const itemId = action.payload;

      const removeItem = state.carts.filter((item) => {
        console.log(itemId, item.id, state.carts, "removed item");

        return item.id !== itemId;
      });

      state.carts = removeItem;

      // typeof window !== "undefined" &&
      // localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export function useIsLoading() {
  return useSelector((state) => state.cart.isLoading);
}

export function useGetCart() {
  return useSelector((state) => state.cart.carts);
}

export function useIsError() {
  return useSelector((state) => state.cart.isError);
}
