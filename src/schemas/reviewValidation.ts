import z from "zod";

export const reviewValidation = z.object({
  comment: z.string().min(1, "Please write a comment before submitting"),
});
export type TReviewInput = z.infer<typeof reviewValidation>;
