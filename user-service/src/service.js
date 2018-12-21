import jayson from "jayson";

import models from "./models";
import controller from "./controllers";
import secrets from "./config/secrets";

// create a server
const server = jayson.server({
  signUpUser(credentials, callback) {
    console.log("signUpUser called");
    controller.signUpUser(credentials, callback);
  },
  signInUser(credentials, callback) {
    console.log("signInUser called");
    controller.signInUser(credentials, callback);
  },
  tryAutoSignIn(user, callback) {
    console.log("tryAutoSignIn called");
    controller.tryAutoSignIn(user, callback);
  }
});

models.sequelize.sync().then(() => {
  server
    .http()
    .listen(secrets.SERVICE_USER_PORT, () =>
      console.log(
        `user service listenning on port ${secrets.SERVICE_USER_PORT} in "${
          secrets.NODE_ENV
        }" mode`
      )
    );
});
