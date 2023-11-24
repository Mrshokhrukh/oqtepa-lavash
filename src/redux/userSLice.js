import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./api";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async ({ token }) => {
    const response = await axios.get(`${baseUrl}user/about/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState: {
    userData: "",
    isLoaing: true,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state, action) => {
      state.isLoaing = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLoaing = false;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoaing = false;
    });
  },
});

export default userSlice.reducer;
