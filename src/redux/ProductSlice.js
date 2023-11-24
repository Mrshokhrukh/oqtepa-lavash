import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./api";
const initialState = {
  products: [],
  categories: [],
  error: null,
  isLoading: true,
  likedProducts: [],
  allProducts: [],
  isPrLoading: false,
};
let token = JSON.parse(localStorage.getItem("token"));
export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    if (token) {
      let getData = await fetch(`${baseUrl}product/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let resp = await getData.json();
      return resp;
    } else {
      let getData = await fetch(`${baseUrl}product/`);
      let resp = await getData.json();
      return resp;
    }
  }
);
export const getSinglePrAsync = createAsyncThunk(
  "products/getSinglePrAsync",
  async (id) => {
    if (token) {
      let getData = await fetch(`${baseUrl}product/category/${id}/product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let resp = await getData.json();
      return resp;
    } else {
      let getData = await fetch(`${baseUrl}product/category/${id}/product`);
      let resp = await getData.json();
      return resp;
    }
  }
);

export const getCategoriesAsync = createAsyncThunk(
  "products/getCategoriesAsync",
  async () => {
    let getData = await fetch(`${baseUrl}product/category/`);
    let resp = await getData.json();
    return resp;
  }
);
export const getLikedProduct = createAsyncThunk(
  "products/getLikedProduct",
  async ({ token }) => {
    let getData = await fetch(`${baseUrl}user/favorites/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let resp = await getData.json();
    return resp;
  }
);
export const addLikeProduct = createAsyncThunk(
  "products/addLikeProduct",
  async ({ id, token }) => {
    let getData = await fetch(`${baseUrl}user/${id}/favorite/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let resp = await getData.json();
    return resp;
  }
);
export const removeLikeFromProduct = createAsyncThunk(
  "products/removeLikeFromProduct",
  async ({ id, token }) => {
    await fetch(`${baseUrl}user/${id}/delete-favorite/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(getProductsAsync.rejected, (state) => {
      state.isLoading = false;
      state.error = "error has been accured";
    });

    // ----------------CATEGORIES-----------------
    builder.addCase(getCategoriesAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    // ----------------GET SINGLE Categories-------------------------------------

    builder.addCase(getSinglePrAsync.pending, (state, action) => {
      state.isPrLoading = true;
    });
    builder.addCase(getSinglePrAsync.fulfilled, (state, action) => {
      state.isPrLoading = false;
      state.products = action.payload;
    });

    // ----------------LIKE PRODUCT-------------------------------
    builder.addCase(getLikedProduct.fulfilled, (state, action) => {
      state.likedProducts = action.payload;
    });
    builder.addCase(addLikeProduct.fulfilled, (state, action) => {
      let findLikedItem = state.products.find((item) => {
        return item.id === action.payload.product.id;
      });

      if (findLikedItem.is_like) {
        findLikedItem.is_like = false;
      } else {
        findLikedItem.is_like = true;
      }
    });

    builder.addCase(removeLikeFromProduct.fulfilled, (state, action) => {
      state.likedProducts = state.likedProducts.filter(
        (item) => item.id !== action.payload
      );
    });
  },
});

export const { getProducts, changeCateg } = productSlice.actions;

export default productSlice.reducer;
