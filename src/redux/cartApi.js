import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./api";
import axios from "axios";
export const getCartProducts = createAsyncThunk(
  "cartItems/getCartProducts",
  async ({ token }) => {
    const response = await axios.get(`${baseUrl}product/basket/`, {
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
    const response = await axios.get(`${baseUrl}product/${id}/basket/`, {
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
    const response = await axios.delete(
      `${baseUrl}product/${id}/delete-basket/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  }
);

export const removeFromCart = createAsyncThunk(
  "cartItems/removeFromCart",
  async ({ id, token }) => {
    let data = await axios.delete(`${baseUrl}product/${id}/remove-basket/`, {
      Authorization: `Bearer ${token}`,
    });
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
      state.status = "Loading...";
    });

    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
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
      // state.products.filter((item) => {
      //   console.log(item);
      // });
    });

    builder.addCase(decreaseQTY.fulfilled, (state, action) => {
      // let existingItem = state.products.find((item) => {
      //   return item.product.id === action.payload.product.id;
      // });

      // if (existingItem && existingItem.quantity > 1) {
      //   existingItem.quantity -= 1;
      // }

      console.log(action.payload);
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
