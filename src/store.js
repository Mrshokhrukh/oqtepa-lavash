import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./redux/sidebarSlice";
import modalSlice from "./redux/modalSlice";
import ProductSlice from "./redux/ProductSlice";
import authSlice from "./redux/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authApi from "./redux/authAPI";
import cartApi from "./redux/cartApi";
import userSLice from "./redux/userSLice";

export const store = configureStore({
  reducer: {
    cartItems: cartApi,
    sidebar: sidebarSlice,
    modal: modalSlice,
    products: ProductSlice,
    authModal: authSlice,
    user: userSLice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
