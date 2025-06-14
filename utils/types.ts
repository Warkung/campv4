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

export type LandmarkCardProps = {
  id: string; // Assuming 'id' is a string, adjust if it's a number
  name: string;
  image: string; // URL or path to the image
  category: string;
  description: string;
  price: number;
  province: string;
  lat: number;
  lng: number;
};
