import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./redux/sidebarSlice";
import modalSlice from "./redux/modalSlice";
import ProductSlice from "./redux/ProductSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    modal: modalSlice,
    products: ProductSlice,
  },
});
