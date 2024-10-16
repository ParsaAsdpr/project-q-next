import { z } from "zod";

const schema = z.object({
    title: z.string().min(20).max(100),
    body: z.string().min(30).max(1000),
})

export default schema