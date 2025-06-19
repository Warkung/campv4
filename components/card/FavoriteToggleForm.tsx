"use client";
import { toggleFavoriteAction } from "@/action/action";
import FormContainer from "../form/FormContainer";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { CardSubmitButton } from "../form/ButtonForm";

function FavoriteToggleForm({
  favoriteId,
  landmarkId,
}: {
  favoriteId: string | null;
  landmarkId: string;
}) {
  const pathname = usePathname();
  //   console.log("pathName", pathname);
  //   console.log("favoriteId", favoriteId);
  //   console.log("landmarkId", landmarkId);

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    landmarkId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;
