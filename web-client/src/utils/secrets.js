// env is default to "development" unless env is specified
export let NODE_ENV;
process.env.REACT_APP_NODE_ENV
  ? (NODE_ENV = process.env.REACT_APP_NODE_ENV)
  : (NODE_ENV = "development");

export const OAUTH_REDIRECT = process.env.REACT_APP_OAUTH_REDIRECT;

export const DEV_SERVER_URL = process.env.REACT_APP_DEV_SERVER_URL;
export const DEV_SERVER_PORT = process.env.REACT_APP_DEV_SERVER_PORT;
export const DEV_SERVER_WS = process.env.REACT_APP_DEV_SERVER_WS;

export const PROD_SERVER_URL = process.env.REACT_APP_PROD_SERVER_URL;
export const PROD_SERVER_PORT = process.env.REACT_APP_PROD_SERVER_PORT;
export const PROD_SERVER_WS = process.env.REACT_APP_PROD_SERVER_WS;

export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;

export const FACEBOOK_CLIENT_ID = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
export const FACEBOOK_CLIENT_SECRET =
  process.env.REACT_APP_FACEBOOK_CLIENT_SECRET;
