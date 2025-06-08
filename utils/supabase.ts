import { createClient } from "@supabase/supabase-js";

const bucket = "landmark";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
async function uploadFile(image: File) {
  const timeStamp = Date.now();
  const fileName = `Warkung-${timeStamp}_${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, image);
  if (!data) throw new Error("Upload failed");
  return data.path;
}

export { uploadFile };
