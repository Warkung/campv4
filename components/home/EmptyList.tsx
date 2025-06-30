import Link from "next/link";
import { Button } from "../ui/button";

function EmptyList({
  heading = "No Result",
  message = "Searching for something else",
  bltText = " Back",
}: {
  heading?: string;
  message?: string;
  bltText?: string;
}) {
  return (
    <div className="mt-16 flex flex-col items-center gap-y-4 text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {heading}
      </h2>
      <p className="text-muted-foreground">{message}</p>
      <Button asChild>
        <Link href="/">{bltText}</Link>
      </Button>
    </div>
  );
}
export default EmptyList;
