import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignInCardButton } from "../form/ButtonForm";
import { fetchFavoriteId } from "../../action/action";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleButton({ landmarkId }: { landmarkId: string }) {
  const { userId } = await auth();
  if (!userId) return <SignInCardButton />;

  const favoriteId = await fetchFavoriteId({ landmarkId });

  return <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId} />;
}
export default FavoriteToggleButton;
