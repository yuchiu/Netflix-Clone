import elasticsearch from "elasticsearch";
import {
  SERVICE_MOVIE_URL,
  SERVICE_MOVIE_DB_ELASTICSEARCH_PORT,
  SERVICE_MOVIE_DB_ELASTICSEARCH_LOG
} from "./secrets";

const client = new elasticsearch.Client({
  host: `${SERVICE_MOVIE_URL}:${SERVICE_MOVIE_DB_ELASTICSEARCH_PORT}`,
  log: SERVICE_MOVIE_DB_ELASTICSEARCH_LOG
});

export default client;
