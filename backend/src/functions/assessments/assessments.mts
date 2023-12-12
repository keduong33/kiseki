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

  if (subject) console.log(decodeURIComponent(subject));
  // const result = await sql`select * from diagnostics_test`;
  // console.log(result);

  return new Response("Subject");
};

export const config: Config = {
  method: "GET",
  path: ["/api/assessments/:subject", "/api/assessments/:subject/:subtopic"],
};
