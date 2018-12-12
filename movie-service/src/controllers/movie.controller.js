import queryBody from "./queryBody";
import ESClient from "../config/ESClient.config";

const normalizeResponse = ESResponse =>
  ESResponse.hits.hits.map((hit, index) => {
    const newHit = {};
    newHit.id = hit._id;
    newHit.score = hit._score;
    newHit.data = { ...hit._source };
    delete newHit.data.req_headers;
    delete newHit.data.res_headers;
    return newHit;
  });

export default {
  getMovie: async (req, res) => {
    const { movieId } = req.params;
    const response = await ESClient.search({
      index: "imdb",
      body: queryBody.testSearchAll
    });
    res.status(200).send({
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      movieId,
      response
    });
  },
  getMovieCollections: async (req, res) => {
    const { collectionType } = req.params;
    let response;
    switch (collectionType) {
      case "popular":
        response = await ESClient.search({
          index: "imdb",
          body: queryBody.testSearchAll
        });

        res.status(200).send({
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          total: response.hits.total,
          timeSpent: response.took,
          movieCollection: normalizeResponse(response)
        });
        break;
      case "rating":
        response = await ESClient.search({
          index: "imdb",
          body: queryBody.testSearchAll
        });

        res.status(200).send({
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          total: response.hits.total,
          timeSpent: response.took,
          movieCollection: normalizeResponse(response)
        });
        break;
      case "latest":
        response = await ESClient.search({
          index: "imdb",
          body: queryBody.testSearchAll
        });

        res.status(200).send({
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          total: response.hits.total,
          timeSpent: response.took,
          movieCollection: normalizeResponse(response)
        });
        break;
      default:
        res.status(403).send({
          meta: {
            type: "error",
            status: 403,
            message: `collection type "${collectionType}" is not valid`
          }
        });
    }
  }
};
