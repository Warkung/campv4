import { fetchLandmarks } from "@/action/action";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import { Suspense } from "react";
import LoadingCard from "../card/LoadingCard";

export default async function LandmarkContainer() {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks();

  return (
    <div>
        <LandmarkList landmarks={landmarks} />
    </div>
  );
}
