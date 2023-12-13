type configType = {
  clerk: {
    publisableKey?: string;
  };
};

const getConfig = (): configType => {
  return {
    clerk: {
      publisableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
    },
  } satisfies configType;
};

export const config = getConfig();
