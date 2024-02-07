import productService from "@/services/product.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProduct = createAsyncThunk(
    "product/create",
    async (formData, thunkApi) => {
      try {
        console.log({ formData });
        return await productService.createProduct(formData);
      } catch (error) {
        const message =
          (error.response, error.response.data, error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  
  export const getProducts = createAsyncThunk(
    "product/getAll",
    async (_, thunkApi) => {

      try {
        console.log("pp",productService.getProducts())
        return await productService.getProducts();
      } catch (error) {
        const message =
          (error.response, error.response.data, error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  
  export const getProduct = createAsyncThunk(
    "product/getSingle",
    async (id, thunkApi) => {
      try {
        return await productService.getProduct(id);
      } catch (error) {
        const message =
          (error.response, error.response.data, error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  
  export const deleteProduct = createAsyncThunk(
    "product/delete",
    async (id, thunkApi) => {
      try {
        return await productService.deleteProduct(id);
      } catch (error) {
        const message =
          (error.response, error.response.data, error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  
  export const updateProduct = createAsyncThunk(
    "product/update",
    async ({ formData, id }, thunkApi) => {
      try {
        return await productService.updateProduct(formData, id);
      } catch (error) {
        const message =
          (error.response, error.response.data, error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  