const dotenv = require("dotenv");
const fs = require("fs");

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
const NODE_ENV = node_env;

const { JWT_SECRET } = process.env;

const { SERVICE_USER_URL } = process.env;
const { SERVICE_USER_PORT } = process.env;

const MONGODB_URI = process.env.SERVICE_USER_DB_MONGO_URI;

if (!MONGODB_URI) {
  console.log(
    "No mongo connection string. Set SERVICE_USER_DB_MONGO_URI environment variable."
  );
  process.exit(1);
}

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  MONGODB_URI,
  SERVICE_USER_URL,
  SERVICE_USER_PORT
};
