import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { config } from "./common/config.ts";
import "./index.css";

const { auth0 } = config;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={auth0.domain}
        clientId={auth0.clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: `https://${auth0.domain}/api/v2/`,
          scope: "read:current_user update:current_user_metadata",
        }}
        useRefreshTokens={true}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
