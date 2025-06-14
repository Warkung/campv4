import { LandmarkCardProps } from "@/utils/types";
import Image from "next/image";
import LandmarkRating from "./LandmarkRating";

export default function LandmarkCard({
  landmark,
}: {
  landmark: LandmarkCardProps;
}) {
  const { image, name, id, province, lat, lng, category, description, price } =
    landmark;

  return (
    <article className="group relative items-center">
      <div className="relative h-[300px] ">
        <Image
          src={image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={name}
          fill
          className="rounded-lg group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <LandmarkRating />
      </div>
    </article>
  );
}
