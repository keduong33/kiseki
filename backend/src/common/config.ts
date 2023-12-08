type configType = {
  clerk: clerkConfig;
};

type clerkConfig = {
  secretKey?: string;
  backendAPI: string;
  issuer: string | null;
};

const basicClerkConfig = {
  backendAPI: " https://api.clerk.dev/v1/",
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
          issuer: "https://active-macaque-95.clerk.accounts.dev",
        },
      } satisfies configType;
    default:
      return {
        clerk: {
          ...basicClerkConfig,
          issuer: null,
        },
      } satisfies configType;
  }
};
