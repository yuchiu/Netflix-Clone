import jayson from "jayson";
import {
  SERVICE_USER_HOST,
  SERVICE_USER_PORT,
  SERVICE_MOVIE_HOST,
  SERVICE_MOVIE_PORT
} from "./secrets";

// create a rpc client

export const userService = jayson.client.http({
  hostname: SERVICE_USER_HOST,
  port: SERVICE_USER_PORT
});

export const movieService = jayson.client.http({
  hostname: SERVICE_MOVIE_HOST,
  port: SERVICE_MOVIE_PORT
});
