import type { Config, Context } from "@netlify/functions";
import type { PostgresError } from "postgres";
import { general500Response } from "../../common/generalReponse";
import { initPostgres } from "../../common/postgresDriver";

export default async (req: Request, context: Context) => {
  const { subject, subtopic } = context.params;

  const [sql, error] = initPostgres();

  if (error) {
    return general500Response("Failed to get quiz");
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
      return general500Response("Failed to get quiz");
    } finally {
      sql.end();
    }
  }
};

export const config: Config = {
  method: "GET",
  path: ["/get-diagnostic-quiz/:subject"],
};
