import { z, ZodSchema } from "zod";

const ProfileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
});
const validateWithZod = <T>(Schema: ZodSchema<T>, data: unknown): T => {
  const result = Schema.safeParse(data);
  if (!result.success) {
    throw new Error(result.error.errors.map((e) => e.message).join(",  "));
  }
  return result.data;
};

export { ProfileSchema, validateWithZod };
