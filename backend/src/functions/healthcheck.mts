import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  console.log(process.env.TEST);
  return new Response("Hello, world!");
};

export const config: Config = {
  path: "/healthcheck",
};
