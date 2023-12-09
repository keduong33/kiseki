import type { Config, Context } from "@netlify/functions";

import { verifyClientToken } from "../common/verifyClientToken";

export default async (req: Request, context: Context) => {
  const [userId, error] = await verifyClientToken(req, context);

  if (error) {
    return new Response(error.message, {
      status: error.statusCode,
    });
  }

  console.log(userId);

  return new Response("", { status: 200 });
};

export const config: Config = {
  path: "/healthcheck",
};
