import jayson from "jayson";
import { SERVICE_MOVIE_PORT, NODE_ENV } from "./config/secrets";
import ESClient from "./config/ESClient.config";
import RPCInterface from "./RPCInterfaces";

// create a server
const server = jayson.server(RPCInterface);

ESClient.ping({ requestTimeout: 30000 }, error => {
  if (error) {
    console.error(`Elasticsearch connection failed: ${error}`);
  } else {
    console.log("Elasticsearch connection success");
  }
});

server
  .http()
  .listen(SERVICE_MOVIE_PORT, () =>
    console.log(
      `  Movie Service listenning on port ${SERVICE_MOVIE_PORT} in "${NODE_ENV}" mode`
    )
  );
