import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <section className="py-10">
      <div className="container">
        <Skeleton className="h-10 w-24 mb-8" />
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Image skeleton */}
          <Skeleton className="w-full aspect-square rounded-2xl" />

          {/* Details skeleton */}
          <div className="space-y-8">
            <div className="space-y-2">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Loading;