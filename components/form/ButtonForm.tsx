"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, Loader2 } from "lucide-react";
import { ButtonProps } from "@/utils/types";
import { SignInButton } from "@clerk/nextjs";

export function ButtonForm({ size, variant, type, title }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button disabled={pending} type={type} size={size} variant={variant}>
        {pending ? (
          <>
            <Loader2 className="animate-spin" />
            <span className="ml-2">Loading ...</span>
          </>
        ) : (
          title
        )}
      </Button>
    </div>
  );
}

export const SignInCardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size={"icon"} variant={"default"}>
        <Heart />
      </Button>
    </SignInButton>
  );
};
