import { Button } from "../ui/button";

function EmptyList({
  heading = "No landmark found",
  message = "Searching for something else",
  bltText = " Back",
}: {
  heading?: string;
  message?: string;
  bltText?: string;
}) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{message}</p>
      <Button>{bltText}</Button>
    </div>
  );
}
export default EmptyList;
