"use server";

import {
  imageSchema,
  landmarkSchema,
  ProfileSchema,
  validateWithZod,
} from "@/utils/schema";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";

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

    //#1 validate
    const validateImage = validateWithZod(imageSchema, { image: file });
    const validateField = validateWithZod(landmarkSchema, rawData);

    // console.log("Validate", validateField);
    // console.log("Image", validateImage);

    //#2 upload image
    const uploadedImg = await uploadFile(validateImage.image);

    //#3 insert to DB
    await db.landmark.create({
      data: {
        ...validateField,
        image: uploadedImg,
        profileId: user.id,
      },
    });
    // return { message: "Create landmark success" };
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};

export const fetchLandmarks = async () => {
  try {
    return await db.landmark.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    return renderError(error);
  }
};
