"use server";

import { ProfileSchema, validateWithZod } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return { message: error instanceof Error ? error.message : "Unknown Error" };
};

const getAuthUser = async () => {
  const user = await currentUser();
  console.log(user);
};

const createProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(ProfileSchema, rawData);
    console.log(validateField);
    return { message: "Create Profile Successfully!!!" };
  } catch (error: any) {
    return renderError(error);
  }
};

export default createProfileAction;
