import { fetchLandmarks, fetchLandmarksHero } from "@/action/action";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoriesList from "./CategoriesList";
import EmptyList from "./EmptyList";

export default async function LandmarkContainer({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({
    search,
    category,
  });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();
  // if (landmarks.length === 0) {
  //   return <EmptyList />;
  // }

  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoriesList search={search} category={category} />
      {landmarks.length === 0 ? (
        <EmptyList />
      ) : (
        <LandmarkList landmarks={landmarks} />
      )}
    </div>
  );
}
