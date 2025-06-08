import { InputProps } from "@/utils/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function InputForm({ label, name, type, required }: InputProps) {
  return (
    <div>
      <Label htmlFor={name} className="text-md font-semibold capitalize">
        {label}
      </Label>
      <Input name={name} id={name} type={type} placeholder={label} required={required} />
    </div>
  );
}
export default InputForm;
