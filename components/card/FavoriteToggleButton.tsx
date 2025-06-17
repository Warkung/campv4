import { Heart } from "lucide-react";
import { Button } from "../ui/button";

function FavoriteToggleButton({ landmarkId }: { landmarkId: string }) {
  return (
    <Button size={"icon"} variant={"default"}>
      <Heart />
    </Button>
  );
}
export default FavoriteToggleButton;
