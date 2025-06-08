import { z, ZodSchema } from "zod";
import { categories } from "./categories";
const validateWithZod = <T>(Schema: ZodSchema<T>, data: unknown): T => {
  const result = Schema.safeParse(data);
  if (!result.success) {
    throw new Error(result.error.errors.map((e) => e.message).join(",  "));
  }
  return result.data;
};

const ProfileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
});
const validateImage = () => {
  const maxFileSize = 1024 * 1024; // 1MB
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "Image size must be less than 1MB");
};
const imageSchema = z.object({
  image: validateImage(),
});

const landmarkSchema = z.object({
  name: z.string().min(1, { message: "Landmark name is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(200, { message: "Description must be less than 200 characters" }),
  price: z.coerce.number().int().min(0, { message: "Price is required" }),
  province: z.string().min(1, { message: "Province is required" }),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});

export { ProfileSchema, imageSchema, landmarkSchema, validateWithZod };
