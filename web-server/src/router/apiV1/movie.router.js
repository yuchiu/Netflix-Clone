import express from "express";

import throwRPCErrors from "../../utils/throwRPCErrors";
import handleRPCRes from "../../utils/handleRPCRes";
import { movieService } from "../../config/serviceClient.config";

const router = express.Router();

router.get("/suggestions/:searchTerm", (req, res) => {
  const { searchTerm } = req.params;
  const reqData = { searchTerm };
  movieService.request("getMovieSearchSuggestion", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

router.get("/filters", (req, res) => {
  const { search_term, from_index } = req.query;
  const reqData = { searchTerm: search_term, fromIndex: from_index };
  movieService.request("getMovieSearchResult", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

router.get("/collections/:collectionName", (req, res) => {
  const { collectionName } = req.params;
  const reqData = { collectionName };
  movieService.request("getMovieCollections", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    } else {
      handleRPCRes(response, res);
    }
  });
});

router.get("/:movieId", (req, res) => {
  const { movieId } = req.params;
  const reqData = { movieId };
  movieService.request("getMovie", reqData, (err, response) => {
    if (err) {
      throwRPCErrors(err, res);
    }
    handleRPCRes(response, res);
  });
});

export default router;
