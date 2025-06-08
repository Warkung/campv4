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
  label: string;
  name: string;
  defaultValue?: string;
}

export default function ProvinceInput({
  label,
  name,
  defaultValue,
}: ProvinceInputProps) {
  return (
    <div>
      <Label htmlFor={name} className="mb-1 capitalize text-md font-semibold">
        {label}
      </Label>
      <Select name={name}>
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
