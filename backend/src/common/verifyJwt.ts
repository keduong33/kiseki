import type { Context } from "@netlify/functions";
import axios, { AxiosError } from "axios";
import * as jose from "jose";
import { JOSEError } from "jose/errors";
import { getBackendConfig } from "./config";

type jwtVerificationStatus = {
  isSuccessful: boolean;
  errorMessage?: string;
  status: number;
  userId?: string;
};

export const verifyJwt = async (
  req: Request,
  context: Context
): Promise<jwtVerificationStatus> => {
  const sessionToken = context.cookies.get("__session");
  const accessToken = req.headers.get("Authorization");

  if (!sessionToken && !accessToken) {
    console.log("User has not logged in");
    return {
      isSuccessful: false,
      errorMessage: "You have not signed in",
      status: 401,
    };
  }
  let userId;

  const hostname = new URL(req.url).hostname;
  const { clerk } = getBackendConfig(hostname);
  const clerkSecretKey = clerk.secretKey;

  try {
    const response = await axios.get(clerk.backendAPI, {
      headers: { Authorization: `Bearer ${clerkSecretKey}` },
    });

    const clerkPublicKeySets = jose.createLocalJWKSet(response.data);

    if (accessToken) {
      const { payload } = await jose.jwtVerify(accessToken, clerkPublicKeySets);
      userId = payload.sub;
    } else {
      const { payload } = await jose.jwtVerify(
        sessionToken,
        clerkPublicKeySets
      );
      userId = payload.sub;
    }
  } catch (e) {
    const error = e as AxiosError;

    if (error.response?.status === 401)
      console.log(
        "Unauthorised Access Attempt to Clerk Backend API",
        "Check backend API URL and secret key"
      );
    else if (e instanceof JOSEError) console.log("JOSE ERROR:", e);

    return {
      isSuccessful: false,
      status: 500,
      errorMessage: "Failed to verify tokens",
    };
  }

  return { isSuccessful: true, status: 200, userId: userId };
};
