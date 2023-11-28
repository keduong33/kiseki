import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { config } from "./common/config.ts";
import "./index.css";

const { auth0 } = config;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={auth0.domain}
    clientId={auth0.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
