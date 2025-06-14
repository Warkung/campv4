import { createClient } from "@supabase/supabase-js";

const bucket = "landmark";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
async function uploadFile(image: File) {
  const timeStamp = Date.now();
  const fileName = `landmark_${timeStamp}_${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, image, {
      cacheControl: "3600",
    });
  if (!data) throw new Error(error?.message ?? "Unknown error");

  const publicUrl = supabase.storage.from(bucket).getPublicUrl(fileName)
    .data.publicUrl;
  return publicUrl;
}

export { uploadFile };
