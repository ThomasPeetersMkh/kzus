import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/products",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({ url: `/` }),
      providesTags: ["PRODUCTAPI"],
    }),
    getProductById: builder.query({
      query: (id) => ({ url: `/${id}` }),
    }),
    getProductById: builder.mutation({
      query: ({}) => ({ url: `/${id}` }),
    }),
  }),
});

export default productApi;

export const { useGetAllProductsQuery, useGetCocktailByIdQuery } = productApi;
