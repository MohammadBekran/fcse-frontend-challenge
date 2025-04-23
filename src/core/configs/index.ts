import { getEnvVariable } from "@/lib/utils";

export const env = {
  GRAPHQL_URI: getEnvVariable("VITE_GRAPHQL_URI"),
} as const;
