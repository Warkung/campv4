import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="">
      <Skeleton className="h-[200px]" />
      <Skeleton className="mt-4 w-2/4 h-6 " />
      <Skeleton className="mt-4 w-full h-6 " />
    </div>
  );
};

function LoadingCard() {
  return (
    <div>
      <SkeletonCard />
    </div>
  );
}
export default LoadingCard;
