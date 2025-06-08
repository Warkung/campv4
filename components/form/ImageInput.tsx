import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function ImageInput() {
  const name = "image";
  return (
    <div>
      <Label className="capitalize mb-2">{name}</Label>
      <Input type="file" name={name} accept="image/*" />
    </div>
  );
}
