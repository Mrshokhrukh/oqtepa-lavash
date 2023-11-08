import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let baseUrl = `https://oqtepalavash-api.khasanjon.me/api/`;
const initialState = {
  products: [],
  categories: [],
  error: null,
  isLoading: true,
};

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    let getData = await fetch(`${baseUrl}product/`);
    let resp = await getData.json();
    return resp;
  }
);
export const getCategoriesAsync = createAsyncThunk(
  "products/getCategoriesAsync",
  async () => {
    let getData = await fetch(`${baseUrl}product/categories/`);
    let resp = await getData.json();
    return resp;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      return state;
    },
    // getCategories: (state) => {
    //   return state;
    // },
  },
  extraReducers: {
    [getProductsAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProductsAsync.rejected]: (state) => {
      state.isLoading = false;
      state.error = "error has been accured";
    },

    // ----------------CATEGORIES-----------------
    [getCategoriesAsync.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
