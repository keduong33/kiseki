import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return new Response("Dashboard");
};

export const config: Config = {
  path: "/api/add-new-questions",
};
