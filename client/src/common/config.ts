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
          domain: "dev-bigbrain.au.auth0.com",
          clientId: "mEeuPnXlIxWfgSDAiAz5h36K0pgHn0ch",
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
