"use server";

import { imageSchema, ProfileSchema, validateWithZod } from "@/utils/schema";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error("Please login");
  if (!user.privateMetadata?.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return { message: error instanceof Error ? error.message : "Unknown Error" };
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login");
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(ProfileSchema, rawData);
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });

    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};

export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    // const validateField = validateWithZod(ProfileSchema, rawData);

    //#1 validate
    const validateField = validateWithZod(imageSchema, { image: file });
    console.log("Validate", validateField);
    //#2 upload image
    //#3 insert to DB

    return { message: "Create landmark success" };
  } catch (error) {
    return renderError(error);
  }

  // redirect("/");
};
