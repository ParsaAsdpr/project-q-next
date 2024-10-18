import { z } from "zod";

const schema = z.object({
  username: z.string().min(3).max(25),
  email: z.string().email().min(6).max(50),
  password: z.string().min(8).max(20),
  role: z
    .string()
    .optional()
    .refine(
      (value) => /^[0-9a-fA-F]{24}$/.test(value ?? ""),
      "Invalid Role Id"
    ),
});

export default schema;
