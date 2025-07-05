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
  const { image, name, id, province, price } = landmark;

  return (
    <article className="group relative">
      <Link href={`/landmark/${id}`}>
        <div className="relative h-[200px] mb-2 overflow-hidden rounded-md">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            priority={priority}
          />
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold truncate" title={name}>
            {name}
          </h3>
          <LandmarkRating />
        </div>
        <p className="text-sm text-muted-foreground">{province}</p>
        <p className="text-sm mt-2">
          <span className="font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "THB",
              minimumFractionDigits: 0,
            }).format(price)}
          </span>
          <span className="text-muted-foreground"> / night</span>
        </p>
      </Link>
      <div className="absolute top-3 right-3 z-10">
        <FavoriteToggleButton landmarkId={id} />
      </div>
    </article>
  );
}
