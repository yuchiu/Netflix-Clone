const jayson = require("jayson");
const mongoose = require("mongoose");

const controller = require("./controllers");
const secrets = require("./config/secrets");

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

mongoose.connect(
  secrets.MONGODB_URI,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(`DB Connection failed:${err}`);
    } else {
      console.log(`DB Connection Success, connected to ${secrets.MONGODB_URI}`);
    }
  }
);

server
  .http()
  .listen(secrets.SERVICE_USER_PORT, () =>
    console.log(
      `user service listenning on port ${secrets.SERVICE_USER_PORT} in "${
        secrets.NODE_ENV
      }" mode`
    )
  );
