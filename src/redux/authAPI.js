import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./api";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}user/`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => {
        return {
          url: `register/`,
          method: "POST",
          body: userData,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;

export default authApi;
