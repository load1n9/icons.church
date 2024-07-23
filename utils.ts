import clsx, { ClassValue } from "npm:clsx";
import { twMerge } from "npm:tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}