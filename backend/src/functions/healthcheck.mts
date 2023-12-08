import type { Config, Context } from "@netlify/functions";

import { verifyJwt } from "../common/verifyJwt";

export default async (req: Request, context: Context) => {
  const { isSuccessful, userId, status, errorMessage } = await verifyJwt(
    req,
    context
  );

  if (!isSuccessful) {
    return new Response(errorMessage, {
      status: status,
    });
  }

  console.log(userId);

  return new Response("", { status: 200 });
};

export const config: Config = {
  path: "/healthcheck",
};
