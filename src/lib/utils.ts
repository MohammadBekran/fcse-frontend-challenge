import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key as keyof ImportMetaEnv];
  if (!value) throw new Error(`Missing env variable: ${key}`);

  return value;
};

export { toast } from "sonner";
