import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../actions/product.dispatch";
import { useSelector } from "react-redux";

const initialState = {
    product: null,
    products: [],
    //   category: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
    // totalStoreValue: 0,
    // outOfStock: 0,
  };
  
  console.log(createProduct)
  const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.errorMessage = null;
          toast.success("Product successfully created");
          state.products.push(action.payload);
          console.log(action.payload);
        })
        .addCase(createProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.errorMessage = action.payload;
          toast.error(action.payload);
          console.log(action.payload);
        })
        .addCase(getProducts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.errorMessage = null;
          state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.errorMessage = action.payload;
          toast.error(action.payload);
          console.log(action.payload);
        })
        .addCase(getProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.errorMessage = null;
          state.product = action.payload;
        })
        .addCase(getProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.errorMessage = action.payload;
          toast.error(action.payload);
          console.log(action.payload);
        })
        .addCase(deleteProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.errorMessage = null;
          toast.success("Product deleted successfully");
        })
        .addCase(deleteProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.errorMessage = action.payload;
          toast.error(action.payload);
          console.log(action.payload);
        })
        .addCase(updateProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.errorMessage = null;
          state.product = action.payload;
          toast.success("Product updated successfully");
        })
        .addCase(updateProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.errorMessage = action.payload;
          toast.error(action.payload);
          console.log(action.payload);
        });
    },
  });
  
  export default productSlice.reducer;
  
  export function useIsLoading() {
    return useSelector((state) => state.product.isLoading);
  }
  
  export function useGetProduct() {
    return useSelector((state) => state.product.product);
  }
  
  export function useGetProducts() {
    return useSelector((state) => state.product.products);
  }
  
  export function useIsError() {
    return useSelector((state) => state.product.isError);
  }
  