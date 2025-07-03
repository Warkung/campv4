import Image from "next/image";

function ImageContainner({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) {
  return (
    <section className="h-[300px] md:h-[500px] relative my-8 items-center">
      <Image
        src={mainImage}
        alt={name}
        sizes="100vw"
        fill
        priority
        className="object-cover rounded-2xl"
      />
    </section>
  );
}
export default ImageContainner;
