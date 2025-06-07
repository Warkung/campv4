import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TextAreaInputFormProps {
  name: string;
  labelText?: string;
  defaultValue?: string;
  rows?: number;
  required?: boolean;
}

export default function TextAreaInputForm({
  name,
  defaultValue,
  labelText,
  rows,
  required,
}: TextAreaInputFormProps) {
  return (
    <div>
      <Label htmlFor={name} className="mb-1 capitalize">
        {labelText || name}
      </Label>
      <Textarea
        name={name}
        defaultValue={defaultValue}
        id={name}
        required={required}
        rows={rows}
      />
    </div>
  );
}
