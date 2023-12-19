import type { Config, Context } from "@netlify/functions";
import { DateTime, ManagedTransaction, Neo4jError } from "neo4j-driver";
import type { AnalysedResult } from "../../../../client/types/Quiz/Result";
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

  const analysedResult = (await req.json()) as AnalysedResult;

  const [driver, initError] = initNeo4jDriver();

  if (initError) {
    return new Response(initError.message, {
      status: initError.statusCode,
    });
  }

  // TODO: convert the number into proper Neo4j Integers?
  const session = driver.session();

  try {
    const now = new Date();
    const neo4jDateTime = DateTime.fromStandardDate(now);
    const res = await session.executeWrite((tx: ManagedTransaction) =>
      tx.run(
        `
          MERGE (student:Student {id:$userID})
          MERGE (result:Result {
            id:$resultID, 
            createdAt:$createdAt, 
            totalNumberOfCorrectAnswers:$totalNumberOfCorrectAnswers, 
            totalNumberOfQuestions:$totalNumberOfQuestions,
            subject:$subject}
            )
          MERGE (student)-[tookQuiz:TOOK_QUIZ ]->(result)

          WITH $topics as importedTopic, result
          UNWIND importedTopic as topic
          MERGE (t:Topic {topic:topic.topic})
          MERGE (result)-[hasTopic:HAS_TOPIC {
            numberOfQuestions:topic.numberOfQuestions,
            numberOfCorrectAnswers:topic.numberOfCorrectAnswers
          }]->(t)

          WITH $subtopics as importedSubtopic, result, topic
          UNWIND importedSubtopic as subtopic
          MERGE (sub:Subtopic {subtopic:subtopic.subtopic})
          MERGE (result)-[hasSubtopic:HAS_SUBTOPIC {
            numberOfQuestions:subtopic.numberOfQuestions,
            numberOfCorrectAnswers:subtopic.numberOfCorrectAnswers
          }]->(sub)
        `,
        {
          userID: userID,
          topics: analysedResult.topics,
          subtopics: analysedResult.subtopics,
          createdAt: neo4jDateTime,
          resultID: `${userID}&${neo4jDateTime}`,
          totalNumberOfCorrectAnswers:
            analysedResult.totalNumberOfCorrectAnswers,
          totalNumberOfQuestions: analysedResult.totalNumberOfQuestions,
          subject: analysedResult.subject,
        }
      )
    );
  } catch (error) {
    const e = error as Neo4jError;
    console.error("Failed in saveUserResult", e.message);
    return Response500("Cannot save your information");
  } finally {
    await session.close();
  }

  return new Response("Successfully Saved User Quiz Result", { status: 200 });
};

export const config: Config = {
  method: "POST",
  path: "/api/save-student-result",
};
