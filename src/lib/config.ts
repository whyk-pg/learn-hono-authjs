import type { Context } from "hono";
import { env } from "hono/adapter";

export const getEnv = (ctx: Context) => {
  return env<{ CLIENT_ID: string; CLIENT_SECRET: string; AUTH_SECRET: string }>(
    ctx,
  );
};
