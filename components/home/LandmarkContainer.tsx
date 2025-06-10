import { fetchLandmarks } from "@/action/action";
import LandmarkList from "./LandmarkList";

export default async function LandmarkContainer() {
  const landmarks = await fetchLandmarks();
  console.log("landmarks", landmarks);
  return (
    <div>
      <LandmarkList landmarks={landmarks} />
    </div>
  );
}
