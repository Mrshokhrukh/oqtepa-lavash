import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./api";

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  // prepareHeaders: (headers, { getState }) => {
  //   const token = selectAccessToken(getState());
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getCartProducts: builder.mutation({
      query: (token) => ({
        url: `product/basket/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["cart"],
    }),

    addToCart: builder.mutation({
      query: ({ id, token }) => ({
        url: `product/${id}/basket/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["cart"],
    }),

    decreaseProductQuantity: builder.mutation({
      query: ({ id, token }) => ({
        url: `product/${id}/delete-basket/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["cart"],
    }),
    removeFromCart: builder.mutation({
      query: ({ id, token }) => ({
        url: `product/${id}/remove-basket/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useDecreaseProductQuantityMutation,
  useGetCartProductsMutation,
} = cartApi;
export default cartApi;
