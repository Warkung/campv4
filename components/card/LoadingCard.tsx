import { Skeleton } from "../ui/skeleton";

function LoadingCard() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
      <div className="">
        <Skeleton className="h-[200px]" />
        <Skeleton className="mt-4 w-2/4 h-6 " />
        <Skeleton className="mt-4 w-full h-6 " />
      </div>
    </div>
  );
}
export default LoadingCard;
