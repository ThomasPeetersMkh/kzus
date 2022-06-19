import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `/app_json_login`,
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    logout: builder.mutation({
      query: () => ({ url: `/logout` }),
    }),
  }),
});

export default loginApi;

export const { useLoginMutation, useLogoutMutation } = loginApi;
