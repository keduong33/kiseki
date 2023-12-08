import { verifyToken } from "@clerk/backend";
import type { Context } from "@netlify/functions";
import { getBackendConfig } from "./config";

type JwtVerificationStatus = {
  isSuccessful: boolean;
  errorMessage?: string;
  status: number;
  userId?: string;
};

export const verifyClientToken = async (
  req: Request,
  context: Context
): Promise<JwtVerificationStatus> => {
  const sessionToken = context.cookies.get("__session");
  const accessToken = req.headers.get("Authorization");

  if (!sessionToken && !accessToken) {
    console.warn("User has not logged in");
    return {
      isSuccessful: false,
      errorMessage: "You have not signed in",
      status: 401,
    };
  }
  let userId;

  const hostname = new URL(req.url).hostname;
  const { clerk } = getBackendConfig(hostname);

  try {
    const payload = await verifyToken(sessionToken, {
      issuer: clerk.issuer,
    });
    userId = payload.sub;
  } catch (e) {
    console.error("Failed in verifyClientToken:\n", e);
    return {
      isSuccessful: false,
      status: 500,
      errorMessage: "Failed to verify token",
    };
  }

  return { isSuccessful: true, status: 200, userId: userId };
};
