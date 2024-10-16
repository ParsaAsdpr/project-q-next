import { z } from "zod";

const schema = z.object({
    username: z.string().min(3).max(25),
    email: z.string().email().min(6).max(50),
    password: z.string().min(8).max(20),
})

export default schema