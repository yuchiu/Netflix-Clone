import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import registerRule from "../utils/registerRule";

import models from "../models";

const jwtSignUser = user => {
  try {
    const userJson = user.toJSON();
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(userJson, process.env.JWT_SECRET, {
      expiresIn: ONE_WEEK
    });
  } catch (err) {
    console.log(err);
  }
};
const normalizeUser = user => {
  const summary = {
    username: user.username,
    email: user.email,
    timestamp: user.timestamp
  };
  return summary;
};

export default {
  async signUpUser(args, callback) {
    try {
      const credentials = args;
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
      credentials.password = await bcrypt.hash(credentials.password, 10);
      const user = await models.User.create(credentials);
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
      const isPasswordValid = await bcrypt.compare(
        credentials.password,
        user.toJSON().password
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
      console.log(user);
      /* password is validated */
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

  tryAutoSignIn(user, callback) {
    const response = {
      meta: {
        type: "success",
        status: 200,
        message: ""
      }
    };
    callback(null, response);
  }
};
