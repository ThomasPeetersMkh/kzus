import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomasp/eindwerk/api"
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `/login_check`,
        method: "POST",
        credentials: "include",
        body: {
          username: email,
          password
        }
      })
    }),
    logout: builder.mutation({
      query: () => ({ url: `/logout` })
    })
  })
});

export default loginApi;

export const { useLoginMutation, useLogoutMutation } = loginApi;
