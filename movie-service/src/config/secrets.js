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
export const { SERVICE_MOVIE_NAME } = process.env;
export const { SERVICE_MOVIE_HOST } = process.env;
export const { SERVICE_MOVIE_URL } = process.env;
export const { SERVICE_MOVIE_PORT } = process.env;
export const { SERVICE_MOVIE_DB_ELASTICSEARCH_HOST } = process.env;
export const { SERVICE_MOVIE_DB_ELASTICSEARCH_PORT } = process.env;
export const { SERVICE_MOVIE_DB_ELASTICSEARCH_LOG } = process.env;
