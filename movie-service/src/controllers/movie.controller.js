import queryBody from "./queryBody";
import ESClient from "../config/ESClient.config";
import handleInvalidReq from "../utils/handleInvalidReq";

const normalizeMovie = ESResponse =>
  ESResponse.hits.hits.map((hit, index) => {
    const newHit = {};
    newHit.id = hit._id;
    newHit.score = hit._score;
    newHit.data = { ...hit._source };
    delete newHit.data.req_headers;
    delete newHit.data.res_headers;
    return newHit;
  });

const normalizeSuggestion = ESResponse => {
  const suggestionList = ESResponse.hits.hits.slice(0, 5);
  return suggestionList.map((hit, index) => {
    const newHit = {};
    newHit.id = hit._id;
    newHit.score = hit._score;
    newHit.data = { ...hit._source };
    delete newHit.data.req_headers;
    delete newHit.data.res_headers;
    return newHit;
  });
};

export default {
  getMovie: async (reqData, callback) => {
    const { movieId } = reqData;
    if (!movieId) {
      handleInvalidReq(
        "invalid format, object contain movieId attribute is required",
        callback
      );
      return;
    }
    const response = await ESClient.search({
      index: "imdb",
      body: queryBody.findById(movieId)
    });
    callback(null, {
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      data: {
        total: response.hits.total,
        timeSpent: response.took,
        movie: normalizeMovie(response)
      }
    });
  },

  getMovieSearchResult: async (reqData, callback) => {
    const { searchTerm } = reqData;
    let { fromIndex } = reqData;
    if (!searchTerm) {
      handleInvalidReq(
        "invalid format, object contain searchTerm attribute is required",
        callback
      );
      return;
    }
    if (!fromIndex) {
      fromIndex = 0;
    }
    const searchCount = await ESClient.count({
      index: "imdb",
      body: queryBody.countMatchSearchTerm(searchTerm, 10)
    });
    const response = await ESClient.search({
      index: "imdb",
      body: queryBody.searchTermQuery(searchTerm, 20, fromIndex)
    });
    callback(null, {
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      data: {
        searchTerm,
        total: searchCount.count,
        fromIndex,
        toIndex:
          parseInt(fromIndex, 10) + parseInt(response.hits.hits.length, 10) - 1,
        timeSpent: response.took,
        searchMovieResult: normalizeMovie(response)
      }
    });
  },

  getMovieSearchSuggestion: async (reqData, callback) => {
    const { searchTerm } = reqData;
    if (!searchTerm) {
      handleInvalidReq(
        "invalid format, object contain searchTerm attribute is required",
        callback
      );
      return;
    }
    const response = await ESClient.search({
      index: "imdb",
      body: queryBody.searchSuggestionQuery(searchTerm, 20)
    });
    callback(null, {
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      data: {
        searchTerm,
        suggestionList: normalizeSuggestion(response)
      }
    });
  },

  getMovieCollections: async (reqData, callback) => {
    const { collectionName } = reqData;
    if (!collectionName) {
      handleInvalidReq(
        "invalid format, object contain collectionName attribute is required",
        callback
      );
      return;
    }
    let response;
    switch (collectionName) {
      case "popular":
        response = await ESClient.search({
          index: "imdb",
          sort: "imdb_ratingCount:desc",
          body: queryBody.searchAll(25)
        });
        callback(null, {
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          data: {
            total: response.hits.total,
            collectionName,
            timeSpent: response.took,
            collectionLength: response.hits.hits.length,
            movieCollection: normalizeMovie(response)
          }
        });
        break;
      case "rating":
        response = await ESClient.search({
          index: "imdb",
          sort: "imdb_ratingValue:desc",
          body: queryBody.searchAll(25)
        });

        callback(null, {
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          data: {
            total: response.hits.total,
            collectionName,
            timeSpent: response.took,
            collectionLength: response.hits.hits.length,
            movieCollection: normalizeMovie(response)
          }
        });
        break;
      case "trending":
        // not scrape movie's release date yet,it will return by index's default order
        response = await ESClient.search({
          index: "imdb",
          body: queryBody.searchAll(25)
        });
        callback(null, {
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          data: {
            total: response.hits.total,
            collectionName,
            timeSpent: response.took,
            collectionLength: response.hits.hits.length,
            movieCollection: normalizeMovie(response)
          }
        });
        break;
      default:
        callback(null, {
          meta: {
            type: "error",
            status: 403,
            message: `collection type "${collectionName}" is not valid`
          }
        });
    }
  }
};
