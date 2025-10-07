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
  }),
});

export const { useCreateAdmissionMutation } = admissionApi;
