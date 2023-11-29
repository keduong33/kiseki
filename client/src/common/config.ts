type configType = {
  auth0: {
    domain: string;
    clientId: string;
  };
};

const getConfig = (hostname: string): configType => {
  switch (hostname) {
    case "localhost":
    case "192.168.1.103":
      return {
        auth0: {
          domain: import.meta.env.VITE_DEV_AUTH0_DOMAIN,
          clientId: import.meta.env.VITE_DEV_AUTH0_CLIENT_ID,
        },
      } satisfies configType;
    default:
      return {
        auth0: {
          domain: "",
          clientId: "",
        },
      } satisfies configType;
  }
};

export const config = getConfig(window.location.hostname);
