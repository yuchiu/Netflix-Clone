import express from "express";
import throwRPCErrors from "../../utils/throwRPCErrors";

import { movieService } from "../../config/serviceClient.config";

const router = express.Router();

router.get("/:movieId", (req, res) => {
  const reqData = { movieId: req.params.movieId };
  movieService.request("getMovie", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    }
    res.status(response.result.meta.status).send(response.result);
  });
});

router.get("/collections/:collectionName", (req, res) => {
  const reqData = { collectionName: req.params.collectionName };
  movieService.request("getMovieCollections", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    }
    res.status(response.result.meta.status).send(response.result);
  });
});

export default router;
