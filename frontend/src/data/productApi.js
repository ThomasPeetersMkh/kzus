import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/products",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({ url: `/` }),
    }),
    getProductById: builder.mutation({
      query: (id) => ({ url: `/${id}` }),
    }),
  }),
});

export default productApi;

export const { useGetAllProductsQuery, useGetProductByIdMutation } = productApi;
