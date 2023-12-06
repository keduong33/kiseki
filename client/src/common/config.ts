type configType = {
  clerk: {
    publisableKey?: string;
  };
};

const getConfig = (hostname: string): configType => {
  switch (hostname) {
    case "localhost":
    case "192.168.1.103":
    case "dev--edupath.netlify.app":
      return {
        clerk: {
          publisableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_DEV_KEY,
        },
      } satisfies configType;
    default:
      return {
        clerk: {},
      } satisfies configType;
  }
};

export const config = getConfig(window.location.hostname);
