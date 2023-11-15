import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./api";
const initialState = {
  products: [],
  categories: [],
  error: null,
  isLoading: true,
  choosenProduct: [],
};

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    let getData = await fetch(`${baseUrl}product/`);
    let resp = await getData.json();

    return resp;
  }
);
export const getSinglePrAsync = createAsyncThunk(
  "products/getSinglePrAsync",
  async (id) => {
    let getData = await fetch(`${baseUrl}product/?category_id=${id}`);
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
    changeCateg: (state, action) => {
      const newProducts = state.products.filter(
        (item) => item.category_id == action.payload
      );
      state.choosenProduct = newProducts;
    },

    // getCategories: (state, action) => {
    //   let a = action.payload.Allproducts.filter(
    //     (item) => item.category_id === action.payload.id
    //   );
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
    [getCategoriesAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategoriesAsync.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },

    // ----------------GET SINGLE-------------------------------------
    [getSinglePrAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getSinglePrAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.choosenProduct = action.payload;
    },
  },
});

export const { getProducts, changeCateg } = productSlice.actions;

export default productSlice.reducer;
