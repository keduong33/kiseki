import type { Config, Context } from "@netlify/functions";
import type { ManagedTransaction, Neo4jError } from "neo4j-driver";
import type { Neo4jResultTopicSubtopic } from "../../../../types/Neo4j";
import { initNeo4jDriver } from "../../common/neo4jDriver";
import { Response500 } from "../../common/responseTemplate";
import { verifyClientToken } from "../../common/verifyClientToken";
import { convertNeo4jResult } from "./convertNeo4jResult";

export default async (req: Request, context: Context) => {
  const [userID, verificationError] = await verifyClientToken(req, context);

  if (verificationError) {
    return new Response(verificationError.message, {
      status: verificationError.statusCode,
    });
  }

  const [driver, initError] = initNeo4jDriver();

  if (initError) {
    return new Response(initError.message, {
      status: initError.statusCode,
    });
  }

  const session = driver.session();

  try {
    // TODO: different filters
    const res = await session.executeRead((tx: ManagedTransaction) =>
      tx.run<Neo4jResultTopicSubtopic>(
        `
        MATCH (s:Student {id:$userID})-[:TOOK_QUIZ]->(result:Result)
        WITH result
        MATCH (result)-[stats]->(resultType:Topic|Subtopic)
        RETURN result, LABELS(resultType)[0] as level, stats, resultType`,
        {
          userID: userID,
        }
      )
    );
    const convertedResults = convertNeo4jResult(res);

    return Response.json(convertedResults, { status: 200 });
  } catch (error) {
    const e = error as Neo4jError;
    console.error("Failed in getUserResult", e.message);

    if (e.message.includes("already exist with")) {
    } else if (e.message.includes("must have the property")) {
    }

    return Response500("Cannot retrieve your information");
  } finally {
    await session.close();
  }
};

export const config: Config = {
  path: "/api/get-results",
};
