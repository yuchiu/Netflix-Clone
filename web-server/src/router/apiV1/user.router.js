import express from "express";

import throwRPCErrors from "../../utils/throwRPCErrors";
import { userService } from "../../config/serviceClient.config";

const router = express.Router();

router.post("/signup", (req, res) => {
  const credentials = req.body;

  userService.request("signUpUser", credentials, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    }
    res.status(response.result.meta.status).send(response.result);
  });
});

router.post("/signin", (req, res) => {
  const credentials = req.body;

  userService.request("signInUser", credentials, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    }
    res.status(response.result.meta.status).send(response.result);
  });
});

router.post("/auth", (req, res) => {
  const { user } = req;
  userService.request("tryAutoSignIn", user, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    }
    res.status(response.result.meta.status).send(response.result);
  });
});

export default router;
