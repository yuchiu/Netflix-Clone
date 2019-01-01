import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import registerRule from "../utils/registerRule";
import historyController from "./history.controller";
import bookmarkController from "./bookmark.controller";
import models from "../models";

const comparePassword = async (credentialsPassword, userPassword) => {
  const isPasswordMatch = await bcrypt.compare(
    credentialsPassword,
    userPassword
  );
  return isPasswordMatch;
};

const jwtSignUser = user => {
  try {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: ONE_WEEK
    });
  } catch (err) {
    console.log(err);
  }
};
const normalizeUser = user => {
  const summary = {
    id: user.id,
    username: user.username,
    email: user.email,
    timestamp: user.timestamp
  };
  return summary;
};

export default {
  async authenticateJWT(args, callback) {
    try {
      let response;
      const user = await models.User.findOne({
        where: { id: args.id },
        raw: true
      });
      if (!user) {
        response = {
          meta: {
            type: "error",
            status: 403,
            message: "not authenticated"
          },
          verified: false
        };
        callback(null, response);
        return;
      }

      response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        user: normalizeUser(user),
        verified: true
      };
      callback(null, response);
    } catch (err) {
      console.log(err);
      callback(null, {
        meta: {
          type: "error",
          status: 500,
          message: "server error"
        }
      });
    }
  },
  async signUpUser(credentials, callback) {
    try {
      let response;

      /* check is register format is correct */
      const credentialsError = registerRule(credentials);
      // return error message if there's any errors
      if (credentialsError) {
        response = credentialsError;
        callback(null, response);
        return;
      }

      const isEmailRegistered = await models.User.findOne({
        where: { email: credentials.email },
        raw: true
      });

      /* email already registered */
      if (isEmailRegistered) {
        response = {
          meta: {
            type: "error",
            status: 403,
            message: `email: ${credentials.email} is already registered`
          }
        };
        callback(null, response);
        return;
      }

      /* credential is validated */
      const userRaw = await models.User.create(credentials);
      const user = userRaw.get({ plain: true });
      response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        user: normalizeUser(user),
        token: jwtSignUser(user)
      };
      callback(null, response);
    } catch (err) {
      callback(null, {
        meta: {
          type: "error",
          status: 500,
          message: "server error"
        }
      });
    }
  },
  async signInUser(credentials, callback) {
    try {
      let response;
      const user = await models.User.findOne({
        where: { email: credentials.email },
        raw: true
      });
      /* user not registered */
      if (!user) {
        response = {
          meta: {
            type: "error",
            status: 403,
            message: `this account ${credentials.email} is not yet registered`
          }
        };
        callback(null, response);
        return;
      }
      /* validate password */
      const isPasswordValid = await comparePassword(
        credentials.password,
        user.password
      );

      /* invalid password */
      if (!isPasswordValid) {
        response = {
          meta: {
            type: "error",
            status: 403,
            message: "invalid password"
          }
        };
        callback(null, response);
        return;
      }
      /* password is validated */
      const histories = await historyController.getUserHistory(user.id);
      const bookmarks = await bookmarkController.getUserBookmark(user.id);
      response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        user: normalizeUser(user),
        histories,
        bookmarks,
        token: jwtSignUser(user)
      };
      callback(null, response);
    } catch (err) {
      console.log(err);
      callback(null, {
        meta: {
          type: "error",
          status: 500,
          message: "server error"
        }
      });
    }
  },

  async tryAutoSignIn(user, callback) {
    const histories = await historyController.getUserHistory(user.id);
    const bookmarks = await bookmarkController.getUserBookmark(user.id);
    const response = {
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      histories,
      bookmarks,
      user: normalizeUser(user)
    };
    callback(null, response);
  }
};
