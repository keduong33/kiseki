type configType = {
  clerk: clerkConfig;
};

type clerkConfig = {
  secretKey?: string;
  backendAPI: string;
};

const basicClerkConfig = {
  backendAPI: " https://api.clerk.dev/v1/jwks",
};

export const getBackendConfig = (hostname: string): configType => {
  switch (hostname) {
    case "localhost":
    case "192.168.1.103":
    case "dev--edupath.netlify.app":
      return {
        clerk: {
          ...basicClerkConfig,
          secretKey: process.env.CLERK_SECRET_DEV_KEY,
        },
      } satisfies configType;
    default:
      return {
        clerk: {
          ...basicClerkConfig,
        },
      } satisfies configType;
  }
};
