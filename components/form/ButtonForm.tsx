"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { ButtonProps } from "@/utils/types";

function ButtonForm({ size, variant, type, title }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button disabled={pending} type={type} size={size} variant={variant}>
        {pending ? <Loader2 className="animate-spin" /> : title}
      </Button>
    </div>
  );
}
export default ButtonForm;
