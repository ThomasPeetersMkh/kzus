import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api"
  }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => ({ url: `/users/${id}` }),
      providesTags: ["GetUser"]
    })
  })
});

export default userApi;

export const { useGetUserByIdQuery } = userApi;
