import type { Config, Context } from "@netlify/functions";
import { DateTime, ManagedTransaction, Neo4jError } from "neo4j-driver";
import type { MarkedQuiz } from "../../../../types/Quiz/Quiz";
import { initNeo4jDriver } from "../../common/neo4jDriver";
import { Response500 } from "../../common/responseTemplate";
import { verifyClientToken } from "../../common/verifyClientToken";

export default async (req: Request, context: Context) => {
  const [userID, verificationError] = await verifyClientToken(req, context);

  if (verificationError) {
    return new Response(verificationError.message, {
      status: verificationError.statusCode,
    });
  }

  if (!req.body) {
    console.error(
      "Failed in saveUserResult:",
      "There was no result sent to the backend"
    );
    return Response500("There is no result to save");
  }

  const markedQuiz = (await req.json()) as MarkedQuiz;

  const [driver, initError] = initNeo4jDriver();

  if (initError) {
    return new Response(initError.message, {
      status: initError.statusCode,
    });
  }

  // TODO: convert the number into proper Neo4j Integers?
  const session = driver.session();

  try {
    const neo4jStartDateTime = DateTime.fromStandardDate(
      new Date(markedQuiz.startTimeStamp)
    );
    const neo4jEndDateTime = DateTime.fromStandardDate(
      new Date(markedQuiz.endTimeStamp)
    );
    const res = await session.executeWrite((tx: ManagedTransaction) =>
      tx.run(
        `
          MERGE (student:Student {id:$userID})

          WITH $questions as importedQuestions, student
          UNWIND importedQuestions as importedQuestion
          MERGE (question:Question {id:importedQuestion.id})
          MERGE (student)-[:ATTEMPT {correct:importedQuestion.markedCorrect, startTimeStamp:$startTimeStamp, endTimeStamp:$endTimeStamp}]->(question)

          WITH importedQuestion, question
          // Handle skills
          FOREACH (skill IN importedQuestion.skills |
            MERGE (ski:Skill {skill: skill})
            MERGE (question)-[:HAS_SKILL]->(ski)
          ) 
        `,
        {
          userID: userID,
          questions: markedQuiz.questions,
          startTimeStamp: neo4jStartDateTime,
          endTimeStamp: neo4jEndDateTime,
        }
      )
    );
  } catch (error) {
    const e = error as Neo4jError;
    console.error("Failed in saveUserResult", e.message);
    return Response500("Cannot save your result");
  } finally {
    await session.close();
  }

  return new Response("Successfully Saved User Quiz Result", { status: 200 });
};

export const config: Config = {
  method: "POST",
  path: "/api/save-student-result",
};
