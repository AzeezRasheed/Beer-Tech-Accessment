import cartService from "@/services/cart.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk(
    "cart/create",
    async (formData, thunkApi) => {
      try {
        console.log({ formData });
        return await cartService.createCart(formData);
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
  
  export const getCarts = createAsyncThunk("cart/getAll", async (_, thunkApi) => {
    try {
      return await cartService.getCarts();
    } catch (error) {
      const message =
        (error.response, error.response.data, error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
      return thunkApi.rejectWithValue(message);
    }
  });
  
  export const getCart = createAsyncThunk(
    "cart/getSingle",
    async (id, thunkApi) => {
      try {
        return await cartService.getCart(id);
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
  
  export const deleteCart = createAsyncThunk(
    "cart/delete",
    async (id, thunkApi) => {
      try {
        return await cartService.deleteCart(id);
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
  
  export const updateCart = createAsyncThunk(
    "cart/update",
    async ({ formData, id }, thunkApi) => {
      try {
        return await cartService.updateCart(formData, id);
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