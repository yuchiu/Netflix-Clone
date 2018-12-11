import express from "express";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";

import apiV1Routes from "./router/apiV1";
import { SERVICE_MOVIE_PORT, NODE_ENV } from "./utils/secrets";
import ESClient from "./config/ESClient.config";

const app = express();

/* allow cors & dev logs for development environment */
if (process.env.NODE_ENV === "development") {
  app.use(cors());
  app.use(logger("dev"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use("/api/v1", apiV1Routes);

ESClient.ping({ requestTimeout: 30000 }, error => {
  if (error) {
    console.error(`Elasticsearch connection failed: ${error}`);
  } else {
    console.log("Elasticsearch connection success");
  }
});

/* listen to port */
app.listen(SERVICE_MOVIE_PORT, () => {
  console.log(
    `Web Server listenning on port ${SERVICE_MOVIE_PORT} in "${NODE_ENV}" mode`
  );
});
