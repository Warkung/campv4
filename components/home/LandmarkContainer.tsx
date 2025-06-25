import { fetchLandmarks } from "@/action/action";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

export default async function LandmarkContainer({ search }: { search?: string }) {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({ search });

  return (
    <div>
      <Hero landmarks={landmarks} />
      <LandmarkList landmarks={landmarks} />
    </div>
  );
}
