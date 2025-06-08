"use client ";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/utils/categories";

interface CategoryInputProps {
  name: string;
  defaultValue?: string;
}

export default function CategoryInput({
  name,
  defaultValue,
}: CategoryInputProps) {
  return (
    <div>
      <Label htmlFor={name} className="mb-1 capitalize">
        {name}
      </Label>
      <Select name={name}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category, index) => (
            <SelectItem key={index} value={category.label}>
              <span className="flex items-center gap-2 capitalize">
                <category.icon />
                {category.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
