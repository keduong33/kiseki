import type { Config, Context } from "@netlify/functions";

import { verifyClientToken } from "../common/verifyClientToken";

export default async (req: Request, context: Context) => {
  const [userId, error] = await verifyClientToken(req, context);

  if (error) {
    return new Response(error.message, {
      status: error.statusCode,
    });
  }
  return new Response("Healthcheck clear", { status: 200 });
};

export const config: Config = {
  path: "/api/healthcheck",
};
