import { Landmark } from "@prisma/client";
import Image from "next/image";

export default function LandmarkCard({ landmark }: { landmark: Landmark }) {
  console.log("landmark", landmark);
  const { image, name } = landmark;
  console.log("image", image);

  return (
    <article className="group relative">
      <div className="relative h-[300px]">
        <h1>{name}</h1>
        <img src={image} className="w-100 h-200 object-cover" alt={name} />
      </div>
    </article>
  );
}
