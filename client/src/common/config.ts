type configType = {
  clerk: {
    publisableKey?: string;
  };
};

const getConfig = (hostname: string): configType => {
  return {
    clerk: {
      publisableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
    },
  } satisfies configType;
};

export const config = getConfig(window.location.hostname);
