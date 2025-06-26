import LandmarkContainer from "@/components/home/LandmarkContainer";

async function page({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) {
  const { search, category } = await searchParams;

  return (
    <div>
      <LandmarkContainer search={search} category={category} />
    </div>
  );
}
export default page;
