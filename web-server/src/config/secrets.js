import dotenv from "dotenv";
import fs from "fs";
import logger from "../utils/logger";

if (fs.existsSync("../.env")) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: "../.env" });
} else {
  logger.debug(
    "No .env file. Create an .env file to supply config environment variables"
  );
}

// env is default to "development" unless env is specified
let node_env;
if (process.env.NODE_ENV) {
  node_env = process.env.NODE_ENV;
} else {
  node_env = "development";
}
export const NODE_ENV = node_env;

// server url is default to "http://localhost" unless env is specified
let server_url;
if (process.env.WEB_SERVER_URL) {
  server_url = process.env.WEB_SERVER_URL;
} else {
  server_url = "http://localhost";
}
export const SERVER_URL = server_url;

// port is default to 3030 unless env is specified
let server_port;
if (process.env.WEB_SERVER_PORT) {
  server_port = process.env.WEB_SERVER_PORT;
} else {
  server_port = 3030;
}
export const SERVER_PORT = server_port;

export const { JWT_SECRET } = process.env;

export const { SERVICE_USER_NAME } = process.env;
export const { SERVICE_USER_HOST } = process.env;
export const { SERVICE_USER_URL } = process.env;
export const { SERVICE_USER_PORT } = process.env;

export const { SERVICE_MOVIE_NAME } = process.env;
export const { SERVICE_MOVIE_HOST } = process.env;
export const { SERVICE_MOVIE_URL } = process.env;
export const { SERVICE_MOVIE_PORT } = process.env;
