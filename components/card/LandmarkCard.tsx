import { Landmark } from "@prisma/client";
import Image from "next/image";

export default function LandmarkCard({ landmark }: { landmark: Landmark }) {
  console.log("landmark", landmark);
  const { image, name } = landmark;
  console.log("image", image);

  return (
    <article className="group relative">
      <div className="relative h-[300px]">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
        />
      </div>
    </article>
  );
}
