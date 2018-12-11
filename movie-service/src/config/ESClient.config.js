import elasticsearch from "elasticsearch";
import {
  SERVICE_MOVIE_DB_ELASTICSEARCH_HOST,
  SERVICE_MOVIE_DB_ELASTICSEARCH_LOG
} from "../utils/secrets";

const client = new elasticsearch.Client({
  host: SERVICE_MOVIE_DB_ELASTICSEARCH_HOST,
  log: SERVICE_MOVIE_DB_ELASTICSEARCH_LOG
});

module.exports = client;
