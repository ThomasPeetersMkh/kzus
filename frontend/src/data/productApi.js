import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({ url: `products` }),
    }),
    getProductById: builder.mutation({
      query: (id) => ({ url: `products/${id}` }),
    }),
  }),
});

export default productApi;

export const { useGetAllProductsQuery, useGetProductByIdMutation } = productApi;
