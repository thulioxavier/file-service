import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  CLOUDFLARE_ENDPOINT: z.string().url(),
  CLOUDFLARE_ACCESS_KEY: z.string(),
  CLOUDFLARE_SECRET_KEY: z.string(),
  CLOUDFLARE_TOKEN: z.string(),
  BUCKET_NAME: z.string(),
  ACCOUNT_ID: z.string(),
});

export const env = envSchema.parse(process.env);
