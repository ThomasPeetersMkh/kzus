import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const schoolApi = createApi({
  reducerPath: "schoolApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllSchools: builder.query({
      query: () => ({ url: `schools` }),
    }),
    getSchoolById: builder.mutation({
      query: (id) => ({ url: `schools/${id}` }),
    }),
  }),
});

export default schoolApi;

export const { useGetAllSchoolsQuery, useGetSchoolByIdMutation } = schoolApi;
