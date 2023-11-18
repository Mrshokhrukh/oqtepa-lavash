import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./api";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => {
        return {
          url: `user/register/`,
          method: "POST",
          body: userData,
        };
      },
    }),
    verifyUser: builder.mutation({
      query: (otp) => {
        return {
          url: `user/login/`,
          method: "POST",
          body: otp,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useVerifyUserMutation } = authApi;

export default authApi;
