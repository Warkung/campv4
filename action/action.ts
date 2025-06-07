"use server";

import { ProfileSchema, validateWithZod } from "@/utils/schema";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return { message: error instanceof Error ? error.message : "Unknown Error" };
};

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  if (!user.privateMetadata.hasProfile) {
    redirect("/profile/create");
  }
  return user;
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
    const user = await currentUser();
    if (!user) throw new Error("Please login");
    const rawData = Object.fromEntries(formData);
    // const validateField = validateWithZod(ProfileSchema, rawData);
    console.log(rawData);

    return { message: "Create landmark success" };
  } catch (error) {
    return renderError(error);
  }

  // redirect("/");
};
