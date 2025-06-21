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
      <Button size={"icon"} variant={"default"} className="rounded-xl">
        <Heart className="w-6 h-6" fill="none" />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button size={"icon"} variant={"default"} className="rounded-xl">
      {pending ? (
        <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
      ) : (
        <Heart
          fill={isFavorite ? "hsl(var(--destructive))" : "none"}
          className={`
            w-6 h-6 transition-all duration-150 ease-in-out
            ${
              isFavorite
                ? "hover:scale-110 fill-pink-600 "
                : "group-hover:scale-110 "
            }
          `}
        />
      )}
    </Button>
  );
};
