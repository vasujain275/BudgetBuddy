import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string"
    })
    .min(5, { message: "Email must be at least 5 characters long" })
    .email({ message: "Invalid email format" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string"
    })
    .min(8, { message: "Password must be at least 8 characters long" })
  //.max(32, { message: "Password must be at most 32 characters long" })
  //.regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  //.regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  //.regex(/[0-9]/, { message: "Password must contain at least one number" })
  //.regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
