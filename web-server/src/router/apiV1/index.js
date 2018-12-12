import express from "express";

import userRouter from "./user.router";
import movieRouter from "./movie.router";

const router = express.Router();

router.use("/users", userRouter);
router.use("/movies", movieRouter);

export default router;
