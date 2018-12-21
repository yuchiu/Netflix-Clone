import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import throwRPCErrors from "../utils/throwRPCErrors";
import { JWT_SECRET } from "./secrets";
import { userService } from "./serviceClient.config";

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET
    },
    async (jwtPayload, done) => {
      try {
        userService.request("authenticateJWT", jwtPayload, (err, response) => {
          if (err) {
            throwRPCErrors(err);
          }
          if (response.result.verified) {
            const { user } = response.result;
            return done(null, user);
          }
          return done(new Error(), false);
        });
      } catch (err) {
        return done(new Error(), false);
      }
    }
  )
);
