import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api"
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({ url: `/categories` })
    }),
    getCategoryById: builder.query({
      query: (id) => ({ url: `/categories/${id}` })
    })
  })
});

export default categoryApi;

export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery } =
  categoryApi;
