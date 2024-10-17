import { z } from "zod";

const schema = z.object({
  slug: z.string().min(2).max(25),
  name: z.string().min(3).max(25),
  description: z.string().min(3).max(100).optional(),
  image: z.string().min(3).max(100).optional(),
  questions: z.array(z.string()).optional(),
});

export default schema;
