import { fetchFevorite } from "@/action/action";
import LoadingCard from "@/components/card/LoadingCard";
import LandmarkList from "@/components/home/LandmarkList";
import { Suspense } from "react";

async function FavoritesPage() {
  const fevorites = await fetchFevorite();
  return (
    <Suspense fallback={<LoadingCard />}>
      <LandmarkList landmarks={fevorites} />
    </Suspense>
  );
}
export default FavoritesPage;
