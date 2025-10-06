import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const registerValidation = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits"),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, {
      message: "Please upload your profile picture",
    })
    .refine(
      (files) =>
        files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      {
        message: "Only .jpg, .png, and .webp formats are supported",
      }
    ),
});

export type TRegisterInputs = z.infer<typeof registerValidation>;
