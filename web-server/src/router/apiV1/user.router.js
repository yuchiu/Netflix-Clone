import express from "express";

import throwRPCErrors from "../../utils/throwRPCErrors";
import handleRPCRes from "../../utils/handleRPCRes";
import { userService } from "../../config/serviceClient.config";
import requireAuthentication from "../../middlewares/requireAuthentication";

const router = express.Router();

router.post("/signup", (req, res) => {
  const credentials = req.body;
  userService.request("signUpUser", credentials, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

router.post("/signin", (req, res) => {
  const credentials = req.body;
  userService.request("signInUser", credentials, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

router.get("/auth", (req, res) => {
  const { user } = req;
  if (user) {
    userService.request("tryAutoSignIn", user, (err, response) => {
      if (err) {
        throwRPCErrors(err, res);
      } else {
        handleRPCRes(response, res);
      }
    });
  } else
    res.status(403).send({
      meta: {
        type: "failed",
        status: 403,
        message: "not authenticated"
      }
    });
});

router.post("/histories", requireAuthentication, (req, res) => {
  const userId = req.user.id;
  const movieData = req.body;
  const reqData = {
    userId,
    movieData
  };
  userService.request("createMovieHistory", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

router.post("/bookmarks", requireAuthentication, (req, res) => {
  const userId = req.user.id;
  const movieData = req.body;
  const reqData = {
    userId,
    movieData
  };
  userService.request("createMovieBookmark", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

router.delete("/bookmarks/:bookmarkId", requireAuthentication, (req, res) => {
  const userId = req.user.id;
  const { bookmarkId } = req.params;
  const reqData = {
    userId,
    bookmarkId
  };
  userService.request("removeMovieBookmark", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

export default router;
