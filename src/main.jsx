import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: "dev-wewk8tvtqd22qm4z.us.auth0.com",
  clientId: "DerK6FVWCBsYVqD0risDYPpPhjVrGGnQ",
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: "https://dev-wewk8tvtqd22qm4z.us.auth0.com/api/v2/",
    scope: "read:messages read:client_grants",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);
