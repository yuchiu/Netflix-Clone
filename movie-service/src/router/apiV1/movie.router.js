import express from "express";

import catchExceptions from "../../utils/catchExceptions";
import { movieController } from "../../controllers";

const router = express.Router();

router.get("/:movieId", catchExceptions(movieController.getMovie));
router.get(
  "/collections/:collectionType",
  catchExceptions(movieController.getMovieCollections)
);

export default router;
