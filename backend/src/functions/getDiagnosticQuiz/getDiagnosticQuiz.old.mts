import type { Config, Context } from "@netlify/functions";
import type { PostgresError } from "postgres";
import { initPostgres } from "../../common/postgresDriver";
import { Response500 } from "../../common/responseTemplate";

export default async (req: Request, context: Context) => {
  const { subject, subtopic } = context.params;

  const [sql, error] = initPostgres();

  if (error) {
    return Response500("Failed to get quiz");
  }

  if (subject) {
    try {
      const decodedSubject = decodeURIComponent(subject);
      const questions =
        await sql`select * from diagnostics_question where subject = ${decodedSubject}`;
      return Response.json(questions, { status: 200 });
    } catch (e) {
      const error = e as PostgresError;
      console.error("Failed in getDiagnosticQuiz\n", error);
      return Response500("Failed to get quiz");
    } finally {
      sql.end();
    }
  }
};

export const config: Config = {
  method: "GET",
  path: ["/api/get-diagnostic-quiz/:subject"],
};
