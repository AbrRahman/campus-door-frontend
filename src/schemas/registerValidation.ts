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
export const editProfileValidation = z.object({
  name: z.string("Name is string").optional(),
  phone: z.string().optional(),
  image: z
    .instanceof(FileList)
    .refine(
      (files) =>
        files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      {
        message: "Only .jpg, .png, and .webp formats are supported",
      }
    ),
});
export const passwordValidation = z.object({
  oldPassword: z.string().min(6, "Old password is required"),
  newPassword: z.string().min(6, "New password is required"),
  confirmPassword: z.string().min(6, "Confirm password is required"),
});

export type TRegisterInputs = z.infer<typeof registerValidation>;
export type TEditProfileInput = z.infer<typeof editProfileValidation>;
export type TPasswordInputs = z.infer<typeof passwordValidation>;
