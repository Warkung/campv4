// import { fetchLandmarkDetail } from "@/action/action";
// import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
// import Breadcrums from "@/components/landmark/Breadcrums";
// import Description from "@/components/landmark/Description";
// import ImageContainner from "@/components/landmark/ImageContainner";
// import { redirect } from "next/navigation";

// async function LandmarkDetail({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const landmark = await fetchLandmarkDetail({ id });
//   if (!landmark) redirect("/");
//   const { name, image, category, province, description, price } = landmark;
//   return (
//     <section>
//       <Breadcrums name={name} />
//       <header className="flex justify-between items-center mt-4 ">
//         <h1 className="text-4xl font-bold">{name}</h1>
//         <div className="flex items-center gap-x-4">
//           <span>share</span>
//           <FavoriteToggleButton landmarkId={id} />
//         </div>
//       </header>
//       <ImageContainner mainImage={image} name={name} />
//       {/* Description */}
//       <section>
//         <Description description={description} />
//       </section>
//     </section>
//   );
// }
// export default LandmarkDetail;

import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import { fetchLandmarkDetail } from "@/action/action";
import EmptyList from "@/components/home/EmptyList";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MapPinHouse } from "lucide-react";

async function LandmarkDetail({ params }: { params: { id: string } }) {
  const { id } =await params;
  const landmark = await fetchLandmarkDetail({ id });

  if (!landmark) {
    return (
      <EmptyList
        heading="Landmark Not Found"
        message="Sorry, we couldn't find the landmark you're looking for."
      />
    );
  }

  const { name, image, category, province, description, price } = landmark;

  return (
    <section className="py-10">
      <div className="container">
        <Button asChild className="mb-8">
          <Link href="/">
            <ChevronLeft className="mr-2 size-4" />
            Back
          </Link>
        </Button>
        <div className="grid items-start gap-12 md:grid-cols-2">
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="w-full aspect-square object-cover rounded-2xl shadow-lg"
            priority
          />
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-4xl tracking-tight sm:text-5xl">
                  {name}
                </CardTitle>
                <FavoriteToggleButton landmarkId={id} />
              </div>
              <div className="flex items-center gap-2 pt-2 text-lg text-muted-foreground">
                <MapPinHouse className="size-5" />
                <span className="capitalize">{category}</span>
                <span>&middot;</span>
                <span>{province}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <p className="text-3xl font-semibold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(price)}
                <span className="text-sm text-muted-foreground"> / night</span>
              </p>
              <Button size="lg" className="w-full">
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default LandmarkDetail;
