import { z } from "zod";

const schema = z.object({
  title: z.string().min(10).max(100),
  body: z.string().min(20).max(500),
});

export default schema;
