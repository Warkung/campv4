"use client ";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/utils/provinces";

interface ProvinceInputProps {
  name: string;
  defaultValue?: string;
}

export default function ProvinceInput({
  name,
  defaultValue,
}: ProvinceInputProps) {
  return (
    <div>
      <Label htmlFor={name} className="mb-1">
        {name}
      </Label>
      <Select name={name} required>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a Province" />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((province, index) => (
            <SelectItem key={index} value={province.PROVINCE_NAME}>
              <span className="flex items-center gap-2 capitalize">
                {province.PROVINCE_NAME}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
