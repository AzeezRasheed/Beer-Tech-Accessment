import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slice/filter.slice";
import productSlice from "./slice/product.slice";
import cartSlice from "./slice/cart.slice";

export const rootReducers = {
  product: productSlice,
  filter: filterSlice,
  cart: cartSlice,
};

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
});

export { store };
