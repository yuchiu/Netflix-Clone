import express from "express";

import movieRouter from "./movie.router";
import filterRouter from "./filter.router";

const router = express.Router();

router.use("/movies", movieRouter);
router.use("/filters", filterRouter);

export default router;
