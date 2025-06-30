import { fetchFevorite } from "@/action/action";
import LoadingCard from "@/components/card/LoadingCard";
import EmptyList from "@/components/home/EmptyList";
import LandmarkList from "@/components/home/LandmarkList";
import { Suspense } from "react";

async function FavoritesPage() {
  const fevorites = await fetchFevorite();
  if (fevorites.length === 0)
    return (
      <EmptyList
        heading="Favorites Empty"
        message="Add some favorites to see them here"
        bltText="Back"
      />
    );
  return (
    <Suspense fallback={<LoadingCard />}>
      <LandmarkList landmarks={fevorites} />
    </Suspense>
  );
}
export default FavoritesPage;
