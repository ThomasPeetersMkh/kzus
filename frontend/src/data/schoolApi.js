import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const schoolApi = createApi({
  reducerPath: "schoolApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/",
    credentials: "include"
  }),
  endpoints: (builder) => ({
    getAllSchools: builder.query({
      query: () => ({ url: `schools` }),
      providesTags: ["AllSchools"]
    }),
    getSchoolById: builder.query({
      query: (id) => ({ url: `schools/${id}` }),
      providesTags: ["AllSchools"]
    })
  })
});

export default schoolApi;

export const { useGetAllSchoolsQuery, useGetSchoolByIdQuery } = schoolApi;
