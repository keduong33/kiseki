import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const { subject, subtopic } = context.params;
  //   const neo4jDriver = initDriver();
  return new Response("Subject");
};

export const config: Config = {
  method: "GET",
  path: "/assessments/:subject",
};
