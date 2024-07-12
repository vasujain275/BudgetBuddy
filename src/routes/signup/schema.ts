import { z } from "zod";

export const registerFormSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string"
    })
    .min(5, { message: "Username must be at least 5 characters long" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string"
    })
    .min(3, { message: "Password must be at least 3 characters long" })
    .max(31, { message: "Password must be at most 31 characters long" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must be alphanumeric" })
  //.regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  //.regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  //.regex(/[0-9]/, { message: "Password must contain at least one number" })
});

export type RegisterFormSchema = typeof registerFormSchema;
