import type { Config, Context } from "@netlify/functions";
import { initDriver } from "../../common/neo4jDriver";

const generalErrorResponse = new Response("Failed to get assessments", {
  status: 500,
});

export default async (req: Request, context: Context) => {
  const { subject, subtopic } = context.params;
  const neo4jDriver = initDriver();

  if (!neo4jDriver) return generalErrorResponse;

  try {
    console.log(await neo4jDriver?.getServerInfo());
  } catch (e) {
    console.error("Failed in assessments.mts", e);
    return generalErrorResponse;
  } finally {
    neo4jDriver.close();
  }

  return new Response("Subject");
};

export const config: Config = {
  method: "GET",
  path: "/assessments/:subject",
};
