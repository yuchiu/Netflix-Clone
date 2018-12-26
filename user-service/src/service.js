import jayson from "jayson";

import models from "./models";
import controller from "./controllers";
import { SERVICE_USER_PORT, NODE_ENV } from "./config/secrets";

// create a server
const server = jayson.server({
  authenticateJWT(credentials, callback) {
    controller.authenticateJWT(credentials, callback);
  },
  signUpUser(credentials, callback) {
    controller.signUpUser(credentials, callback);
  },
  signInUser(credentials, callback) {
    controller.signInUser(credentials, callback);
  },
  tryAutoSignIn(user, callback) {
    controller.tryAutoSignIn(user, callback);
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
