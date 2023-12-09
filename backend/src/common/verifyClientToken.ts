import { verifyToken } from "@clerk/backend";
import type { Context } from "@netlify/functions";
import { getBackendConfig } from "./config";
import {
  safeError,
  safeResult,
  type PromiseSafeResponse,
} from "./safeResponse";

export const verifyClientToken = async (
  req: Request,
  context: Context
): PromiseSafeResponse<string> => {
  const sessionToken = context.cookies.get("__session");
  const accessToken = req.headers.get("Authorization");

  if (!sessionToken && !accessToken) {
    console.warn("User has not logged in");
    return safeError({ statusCode: 401, message: "You have not signed in" });
  }
  let userId;

  const { clerk } = getBackendConfig();

  if (!clerk) {
    console.warn("Failed in verifyCLientToken", "Invalid environment");
    return safeError({ statusCode: 500, message: "Invalid Environment" });
  }

  try {
    const payload = await verifyToken(sessionToken, {
      issuer: clerk.issuer,
    });
    userId = payload.sub;
  } catch (e) {
    console.error("Failed in verifyClientToken:\n", e);
    return safeError({ statusCode: 500, message: "Failed to verify token" });
  }

  return safeResult(userId);
};
