import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authModal",
  initialState: { isOpen: false },
  reducers: {
    openAuthModal: (state) => {
      state.isOpen = true;
    },
    closeAuthModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = authSlice.actions;

export default authSlice.reducer;
