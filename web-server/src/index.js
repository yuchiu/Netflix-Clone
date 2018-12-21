import express from "express";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";

// Passport configuration & middlewares
import "./config/passport";
import apiV1Routes from "./router/apiV1";
import { SERVER_PORT, NODE_ENV } from "./config/secrets";

const app = express();

/* allow cors & dev logs for development environment */
if (process.env.NODE_ENV === "development") {
  app.use(cors());
  app.use(logger("dev"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use("/api/v1", apiV1Routes);

/* listen to port */
app.listen(SERVER_PORT, () => {
  console.log(
    `Web Server listenning on port ${SERVER_PORT} in "${NODE_ENV}" mode`
  );
});
