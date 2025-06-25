import LandmarkContainer from "@/components/home/LandmarkContainer";

async function page({ searchParams }: { searchParams: { search?: string } }) {
  const { search } = await searchParams;
  return (
    <div>
      <LandmarkContainer search={search} />
    </div>
  );
}
export default page;
