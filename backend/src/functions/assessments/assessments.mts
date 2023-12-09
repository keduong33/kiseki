import type { Config, Context } from "@netlify/functions";
import { initPostgres } from "../../common/postgresDriver";

const generalErrorResponse = new Response("Failed to get assessments", {
  status: 500,
});

export default async (req: Request, context: Context) => {
  const { subject, subtopic } = context.params;

  const [sql, error] = initPostgres();

  if (error) {
    return generalErrorResponse;
  }

  const result = await sql`select version()`;
  console.log(result);

  return new Response("Subject");
};

export const config: Config = {
  method: "GET",
  path: ["/assessments/:subject", "/assessments/:subject/:subtopic"],
};
