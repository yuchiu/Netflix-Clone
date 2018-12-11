import express from "express";

import { userController } from "../../controllers";

const router = express.Router();

router.get("/auth", userController.tryAutoSignIn);
router.post("/signup", userController.signUpUser);
router.post("/signin", userController.signInUser);

export default router;
