import { Landmark } from "@prisma/client";
import LandmarkCard from "../card/LandmarkCard";

type LandmarksListProps = {
  landmarks: Landmark[];
};

export default function LandmarkList({ landmarks }: LandmarksListProps) {
  return (
    <div>
      {landmarks.map((landmark) => {
        return <LandmarkCard key={landmark.id} landmark={landmark} />;
      })}
    </div>
  );
}
