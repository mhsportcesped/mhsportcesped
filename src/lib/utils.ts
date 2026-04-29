import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formatea un número con coma decimal al estilo español: 21,75 */
export function formatPrice(value: number): string {
  return value.toFixed(2).replace('.', ',');
}
