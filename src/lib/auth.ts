import { Auth, type AuthConfig } from "@auth/core";
import Discord from "@auth/core/providers/discord";
import type { Context } from "hono";
import { getEnv } from "./config";

export const CALLBACK_URL = "/api/auth/callback/discord";

export const auth = (ctx: Context) => {
  const url = new URL(ctx.req.url);
  const { CLIENT_ID, CLIENT_SECRET, AUTH_SECRET } = getEnv(ctx);

  const config: AuthConfig = {
    providers: [
      Discord({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      }),
    ],
    basePath: "/api/auth",
    secret: AUTH_SECRET,
    trustHost: true,
    cookies: {
      pkceCodeVerifier: {
        name: "auth.pkce.code_verifier",
        options: {
          httpOnly: true,
          sameSite: "none",
          path: "/",
          secure: false,
        },
      },
    },
  };

  return Auth(new Request(`${url.href}`), config);
};
