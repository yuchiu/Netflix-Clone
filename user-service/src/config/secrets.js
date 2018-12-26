import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync("../.env")) {
  console.log("Using .env file to supply config environment variables");
  dotenv.config({ path: "../.env" });
} else {
  console.log(
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

export const { JWT_SECRET } = process.env;

export const { SERVICE_USER_NAME } = process.env;
export const { SERVICE_USER_HOST } = process.env;
export const { SERVICE_USER_URL } = process.env;
export const { SERVICE_USER_PORT } = process.env;

export const { SERVICE_USER_PSQL_DB_NAME } = process.env;
export const { SERVICE_USER_PSQL_DB_HOST } = process.env;
export const { SERVICE_USER_PSQL_DB_USER } = process.env;
export const { SERVICE_USER_PSQL_DB_PASS } = process.env;
