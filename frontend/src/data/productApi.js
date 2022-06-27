import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomasp/eindwerk/api/",
    credentials: "include"
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({ url: `products` }),
      providesTags: ["AllProducts"]
    }),
    getProductById: builder.mutation({
      query: (id) => ({ url: `products/${id}` }),
      providesTags: ["SingleProducts"]
    }),
    patchProduct: builder.mutation({
      query: ({ productId, data }) => {
        return {
          url: `products/${productId}`,
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/merge-patch+json"
          }
        };
      },
      invalidatesTags: ["AllProducts", "GetUser"]
    })
  })
});

export default productApi;

export const {
  useGetAllProductsQuery,
  useGetProductByIdMutation,
  usePatchProductMutation
} = productApi;
