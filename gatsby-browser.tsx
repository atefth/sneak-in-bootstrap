import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import UrqlProvider from "./src/api/UrqlProvider"
import Layout from "./src/components/Layout/Layout"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN || "http://localhost"}
      clientId={process.env.GATSBY_AUTH0_CLIENT_ID || "client_id"}
      redirectUri={window.location.origin}
      audience={process.env.GATSBY_AUTH0_AUDIENCE}
      responseType="token"
      scope="openid profile email offline_access"
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <UrqlProvider>{element}</UrqlProvider>
    </Auth0Provider>
  );
}

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}
