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
    addToCart: builder.mutation({
      query: ({ id, token }) => ({
        url: `product/${id}/basket/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getCartProducts: builder.mutation({
      query: (token) => ({
        url: `product/basket/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    // increaseProductQuantity: builder.mutation({
    //   query: (productId) => ({
    //     url: `/cart/increase-quantity/${productId}`, // Replace with your actual endpoint
    //     method: "PATCH", // Assuming you use PATCH to increase quantity
    //   }),
    // }),
    decreaseProductQuantity: builder.mutation({
      query: (productId) => ({
        url: `product/${productId}/delete-basket/`, // Replace with your actual endpoint
        method: "DELETE", // Assuming you use PATCH to decrease quantity
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  //   useIncreaseProductQuantityMutation,
  useDecreaseProductQuantityMutation,
  useLoginUserMutation,
  useVerifyUserMutation,
  useGetCartProductsMutation,
} = authApi;

export default authApi;
