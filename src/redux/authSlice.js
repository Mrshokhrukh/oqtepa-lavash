import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpenLogin: false,
  isOpenVerify: false,
  isLoggedIn: false,
  user: null,
  accessToken: null,
  isLogoutModalOpen: false,
  isAddressModalOpen: false,
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
    openLogoutModal: (state) => {
      state.isLogoutModalOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isLogoutModalOpen = false;
    },
    openAddressModal: (state) => {
      state.isAddressModalOpen = true;
    },
    closeAddressModal: (state) => {
      state.isAddressModalOpen = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      console.log(state.accessToken);
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
  setAccessToken,
  setUser,
  openLogoutModal,
  closeLogoutModal,
  openAddressModal,
  closeAddressModal,
} = authSlice.actions;

export default authSlice.reducer;
