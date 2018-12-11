import jayson from "jayson";
import {
  SERVICE_USER_URL,
  SERVICE_USER_PORT,
  SERVICE_MOVIE_URL,
  SERVICE_MOVIE_PORT
} from "../utils/secrets";

// create a rpc client

export const userService = jayson.client.http({
  hostname: "localhost",
  port: SERVICE_USER_PORT
});

export const realEstateService = jayson.client.http({
  hostname: "localhost",
  port: SERVICE_MOVIE_PORT
});
