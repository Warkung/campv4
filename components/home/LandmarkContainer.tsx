import { fetchLandmarks } from "@/action/action";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

export default async function LandmarkContainer() {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks();

  return (
    <div>
      <Hero landmarks={landmarks} />
      <LandmarkList landmarks={landmarks} />
    </div>
  );
}
