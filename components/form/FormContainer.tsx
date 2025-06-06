"use client";
import { FormContainerProps } from "@/utils/types";
import { ReactNode, useActionState, useEffect } from "react";
import { toast } from "sonner";

function FormContainer({ children, action }: FormContainerProps) {
  const [state, formAction] = useActionState(action, { message: "" });

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
