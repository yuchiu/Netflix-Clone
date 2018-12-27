import express from "express";

import throwRPCErrors from "../../utils/throwRPCErrors";
import handleRPCResponse from "../../utils/handleRPCResponse";
import { movieService } from "../../config/serviceClient.config";

const router = express.Router();

router.get("/:movieId", (req, res) => {
  const reqData = { movieId: req.params.movieId };
  movieService.request("getMovie", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    }
    handleRPCResponse(response, res);
  });
});

router.get("/collections/:collectionName", (req, res) => {
  const reqData = { collectionName: req.params.collectionName };
  movieService.request("getMovieCollections", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCResponse(response, res);
    }
  });
});

export default router;
