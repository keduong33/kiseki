import type { Config, Context } from "@netlify/functions";
import type { ManagedTransaction, Neo4jError } from "neo4j-driver";
import { type Neo4jUser } from "../../../../client/types/User/UserProfile";
import { initNeo4jDriver } from "../../common/neo4jDriver";
import { Response500 } from "../../common/responseTemplate";
import { verifyClientToken } from "../../common/verifyClientToken";

export default async (req: Request, context: Context) => {
  const [userId, verificationError] = await verifyClientToken(req, context);

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
    const res = await session.executeRead((tx: ManagedTransaction) =>
      tx.run<Neo4jUser>(
        `MATCH (s:Student) WHERE s.id = $userID  return s as student`,
        {
          userID: userId,
        }
      )
    );
    console.log(res.records[0].get("student").properties);
  } catch (error) {
    const e = error as Neo4jError;
    console.error("Failed in getUserResult", e.message);
    return Response500("Cannot retrieve your information");
  } finally {
    await session.close();
  }

  return new Response("Healthcheck clear", { status: 200 });
};

export const config: Config = {
  path: "/api/get-results",
};
