import {
  SERVICE_MOVIE_PSQL_DB_HOST,
  SERVICE_MOVIE_PSQL_DB_NAME,
  SERVICE_MOVIE_PSQL_DB_PASS,
  SERVICE_MOVIE_PSQL_DB_USER
} from "./secrets";

export default {
  database: SERVICE_MOVIE_PSQL_DB_NAME,
  username: SERVICE_MOVIE_PSQL_DB_USER,
  password: SERVICE_MOVIE_PSQL_DB_PASS,
  params: {
    dialect: "postgres",
    logging: false,
    operatorsAliases: false,
    host: SERVICE_MOVIE_PSQL_DB_HOST,
    define: {
      underscored: true
    }
  }
};
