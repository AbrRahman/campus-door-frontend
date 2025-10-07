import { baseApi } from "../../api/baseApi";

const admissionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmission: builder.mutation({
      query: ({ formData }) => ({
        url: "/admission",
        method: "POST",
        body: formData,
      }),
    }),
    myAdmittedCollege: builder.query({
      query: () => ({
        url: "/admission",
        method: "GET",
      }),
      transformResponse: (data) => {
        if (data?.data[0]) {
          return data?.data[0].college;
        } else {
          return null;
        }
      },
    }),
  }),
});

export const { useCreateAdmissionMutation, useMyAdmittedCollegeQuery } =
  admissionApi;
