import { baseApi } from "../../api/baseApi";

const collegeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all college
    getAllCollege: builder.query({
      providesTags: ["college"],
      query: (searchTerm) => ({
        url: `/college?searchTerm=${searchTerm}`,
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
    // set getSingle college
    getSingleCollege: builder.query({
      query: (id) => ({
        url: `/college/${id}`,
        method: "GET",
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
  }),
});

export const { useGetAllCollegeQuery, useGetSingleCollegeQuery } = collegeApi;
