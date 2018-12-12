import queryBody from "./queryBody";
import ESClient from "../config/ESClient.config";

const normalizeData = ESResponse =>
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
      body: queryBody.testSearchAll(25)
    });
    res.status(200).send({
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      data: {
        movieId,
        response
      }
    });
  },
  getMovieCollections: async (req, res) => {
    const { collectionType } = req.params;
    let response;
    switch (collectionType) {
      case "popular":
        response = await ESClient.search({
          index: "imdb",
          sort: "imdb_ratingCount:desc",
          body: queryBody.testSearchAll(25)
        });
        res.status(200).send({
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          data: {
            total: response.hits.total,
            timeSpent: response.took,
            collectionLength: response.hits.hits.length,
            movieCollection: normalizeData(response)
          }
        });
        break;
      case "rating":
        response = await ESClient.search({
          index: "imdb",
          sort: "imdb_ratingValue:desc",
          body: queryBody.testSearchAll(25)
        });
        res.status(200).send({
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          data: {
            total: response.hits.total,
            timeSpent: response.took,
            collectionLength: response.hits.hits.length,
            movieCollection: normalizeData(response)
          }
        });
        break;
      case "trending":
        // not scrape movie's release date yet,it will return by index's default order
        response = await ESClient.search({
          index: "imdb",
          body: queryBody.testSearchAll(25)
        });
        res.status(200).send({
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          data: {
            total: response.hits.total,
            timeSpent: response.took,
            collectionLength: response.hits.hits.length,
            movieCollection: normalizeData(response)
          }
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
