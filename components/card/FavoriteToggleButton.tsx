import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignInCardButton } from "../form/ButtonForm";

async function FavoriteToggleButton({ landmarkId }: { landmarkId: string }) {
  const { userId } = await auth();
  if (!userId) return <SignInCardButton />;

  return (
    <Button size={"icon"} variant={"default"}>
      <Heart />
    </Button>
  );
}
export default FavoriteToggleButton;
