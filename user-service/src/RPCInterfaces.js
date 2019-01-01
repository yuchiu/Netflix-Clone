import {
  userController,
  historyController,
  bookmarkController
} from "./controllers";
import {
  SERVICE_USER_NAME,
  SERVICE_USER_URL,
  SERVICE_USER_PORT
} from "./config/secrets";

export default {
  heartbeat(args, callback) {
    callback(null, {
      success: true,
      config: {
        name: SERVICE_USER_NAME,
        url: SERVICE_USER_URL,
        port: SERVICE_USER_PORT
      }
    });
  },
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
  createMovieHistory(reqData, callback) {
    historyController.createMovieHistory(reqData, callback);
  },
  createMovieBookmark(reqData, callback) {
    bookmarkController.createMovieBookmark(reqData, callback);
  },
  removeMovieBookmark(reqData, callback) {
    bookmarkController.removeMovieBookmark(reqData, callback);
  }
};
