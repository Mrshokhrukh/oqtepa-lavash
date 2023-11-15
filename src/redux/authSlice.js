import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authModal",
  initialState: { isOpenLogin: false, isOpenVerify: true },
  reducers: {
    openAuthModal: (state) => {
      state.isOpenLogin = true;
    },
    closeAuthModal: (state) => {
      state.isOpenLogin = false;
    },
    openVerifyModal: (state) => {
      state.isOpenVerify = true;
      console.log("opened");
    },
    closeVerifyModal: (state) => {
      state.isOpenVerify = false;
    },
  },
});

export const {
  openAuthModal,
  closeAuthModal,
  openVerifyModal,
  closeVerifyModal,
} = authSlice.actions;

export default authSlice.reducer;
