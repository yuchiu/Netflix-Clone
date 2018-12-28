import jayson from "jayson";

import models from "./models";
import {
  userController,
  historyController,
  bookmarkController
} from "./controllers";
import { SERVICE_USER_PORT, NODE_ENV } from "./config/secrets";

// create a server
const server = jayson.server({
  authenticateJWT(credentials, callback) {
    userController.authenticateJWT(credentials, callback);
  },
  signUpUser(credentials, callback) {
    userController.signUpUser(credentials, callback);
  },
  signInUser(credentials, callback) {
    userController.signInUser(credentials, callback);
  },
  tryAutoSignIn(user, callback) {
    userController.tryAutoSignIn(user, callback);
  },
  createMovieBookmark(reqData, callback) {
    bookmarkController.createMovieBookmark(reqData, callback);
  },
  createBrowsingHistory(reqData, callback) {
    historyController.createBrowsingHistory(reqData, callback);
  }
});

models.sequelize.sync().then(() => {
  server
    .http()
    .listen(SERVICE_USER_PORT, () =>
      console.log(
        `user service listenning on port ${SERVICE_USER_PORT} in "${NODE_ENV}" mode`
      )
    );
});
