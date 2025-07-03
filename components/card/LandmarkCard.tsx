import { LandmarkCardProps } from "@/utils/types";
import Image from "next/image";
import LandmarkRating from "./LandmarkRating";
import FavoriteToggleButton from "./FavoriteToggleButton";
import Link from "next/link";

export default function LandmarkCard({
  landmark,
  priority,
}: {
  landmark: LandmarkCardProps;
  priority?: boolean;
}) {
  const { image, name, id, province, description, price } = landmark;

  return (
    <article className="group relative items-center">
      <div className="relative h-[150px]">
        <Link href={`/landmark/${id}`}>
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            fill
            className="rounded-lg object-cover group-hover:scale-105 transition-all duration-300"
            priority={priority}
          />
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="text-lg font-semibold truncate" title={name}>
          {name}
        </h3>
        <LandmarkRating />
      </div>
      <p
        className="text-sm text-muted-foreground truncate"
        title={description}
      >
        {description}
      </p>
      <div className="flex justify-between items-center text-sm font-semibold">
        <span>THB {price}</span>
        <p>{province}</p>
      </div>
      <div className=" absolute top-2 right-2">
        <FavoriteToggleButton landmarkId={id} />
      </div>
    </article>
  );
}
