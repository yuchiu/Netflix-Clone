import {
  SERVICE_USER_PSQL_DB_HOST,
  SERVICE_USER_PSQL_DB_NAME,
  SERVICE_USER_PSQL_DB_PASS,
  SERVICE_USER_PSQL_DB_USER
} from "./secrets";

export default {
  database: SERVICE_USER_PSQL_DB_NAME,
  username: SERVICE_USER_PSQL_DB_USER,
  password: SERVICE_USER_PSQL_DB_PASS,
  params: {
    dialect: "postgres",
    logging: false,
    operatorsAliases: false,
    host: SERVICE_USER_PSQL_DB_HOST,
    define: {
      underscored: true
    }
  }
};
