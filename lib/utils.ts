import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function numberToDecimal(value: number): string {
  const [int, decimal] = value.toString(2).split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}