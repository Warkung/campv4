import LandmarkCard from "../card/LandmarkCard";
import { LandmarkCardProps } from "@/utils/types";
import LoadingCard from "../card/LoadingCard";
import { Suspense } from "react";

export default function LandmarkList({
  landmarks,
}: {
  landmarks: LandmarkCardProps[];
}) {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
      {landmarks.map((landmark) => {
        return (
          <Suspense key={landmark.id} fallback={<LoadingCard />}>
            <LandmarkCard key={landmark.id} landmark={landmark} />
          </Suspense>
        );
      })}
    </section>
  );
}
