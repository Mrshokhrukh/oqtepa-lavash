import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./api";
import axios from "axios";
export const getCartProducts = createAsyncThunk(
  "cartItems/getCartProducts",
  async ({ token }) => {
    const response = await axios.get(`${baseUrl}user/basket/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const addToCart = createAsyncThunk(
  "cartItems/addToCart",
  async ({ id, token }) => {
    const response = await axios.get(`${baseUrl}user/${id}/basket/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

export const decreaseQTY = createAsyncThunk(
  "cartItems/decreaseQTY",
  async ({ id, token }) => {
    const response = await axios.delete(`${baseUrl}user/${id}/delete-basket/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

export const removeFromCart = createAsyncThunk(
  "cartItems/removeFromCart",
  async ({ id, token }) => {
    let removedData = await axios.delete(
      `${baseUrl}user/${id}/remove-basket/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return id;
  }
);

const cartProductSlice = createSlice({
  name: "cartItems",
  initialState: {
    products: [],
    status: "idle",
    error: null,
    isLoading: true,
    isSuccess: false,
  },
  reducers: {
    getCartItems: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProducts.pending, (state) => {
      state.isLoading = true;
     
    });

    builder.addCase(getCartProducts.fulfilled, (state, action) => {

      state.products = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
    });

    builder.addCase(addToCart.fulfilled, (state, action) => {
      let existingItem = state.products.find((item) => {
        return item.product.id === action.payload.product.id;
      });
      if (existingItem) {
        existingItem.quantity += 1;
      }
    });

    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.products = state.products.filter((item) => {
        return item.id !== action.payload;
      });
    });

    builder.addCase(decreaseQTY.fulfilled, (state, action) => {
      let existingItem = state.products.find((item) => {
        return item.id === action.payload.id;
      });
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.products = state.products.filter((item) => {
          return item.id !== action.payload.id;
        });
        
      }
    });

    builder.addCase(
      getCartProducts.rejected,
      addToCart.rejected,
      (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }
    );
  },
});

export const { getCartItems } = cartProductSlice.actions;

export default cartProductSlice.reducer;
