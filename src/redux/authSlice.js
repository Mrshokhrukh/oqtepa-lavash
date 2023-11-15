import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpenLogin: false,
  isOpenVerify: false,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "authModal",
  initialState,
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
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const {
  openAuthModal,
  closeAuthModal,
  openVerifyModal,
  closeVerifyModal,
  login,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
