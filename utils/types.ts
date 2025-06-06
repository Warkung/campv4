import { ReactNode } from "react";

export interface ButtonProps {
  title: string;
  size: "default" | "lg" | "sm" | "icon";
  variant:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary";
  type: "submit" | "reset" | "button";
}

export interface FormContainerProps {
  children: ReactNode;
  action: (prevState: any, formData: FormData) => Promise<{ message: string }>;
}

export interface InputProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}
