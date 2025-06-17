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
      <div className="relative h-[200px] ">
        <Image
          src={image}
          alt={name}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // fill
          sizes="300"
          layout="fill"
          objectFit="cover"
          className="rounded-lg group-hover:scale-105 transition-all duration-300 max-h-[200px]"
          priority
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="text-lg font-semibold">{name.substring(0, 30)}</h3>
        <LandmarkRating />
      </div>
      <p className="text-sm text-muted-foreground">
        {description.substring(0, 50)}
      </p>
      <div className="flex justify-between items-center text-sm font-semibold">
        <span>THB {price}</span>
        <p className=" ">{province}</p>
      </div>
    </article>
  );
}
