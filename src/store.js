import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./redux/sidebarSlice";
import modalSlice from "./redux/modalSlice";
import ProductSlice from "./redux/ProductSlice";
import authSlice from "./redux/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authApi from "./redux/authAPI";
import cartApi from "./redux/cartApi";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    modal: modalSlice,
    products: ProductSlice,
    authModal: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, cartApi.middleware),
});

setupListeners(store.dispatch);
