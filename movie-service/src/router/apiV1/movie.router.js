import express from "express";

import { movieController } from "../../controllers/";

const router = express.Router();

router.get("/", movieController.getMovieList);

export default router;
