import {
  SERVICE_MOVIE_PORT,
  SERVICE_MOVIE_URL,
  SERVICE_MOVIE_NAME
} from "./config/secrets";
import movieController from "./controllers/movie.controller";

export default {
  heartbeat(args, callback) {
    callback(null, {
      success: true,
      config: {
        name: SERVICE_MOVIE_NAME,
        url: SERVICE_MOVIE_URL,
        port: SERVICE_MOVIE_PORT
      }
    });
  },
  getMovie(reqData, callback) {
    movieController.getMovie(reqData, callback);
  },
  getMovieSearchResult(reqData, callback) {
    movieController.getMovieSearchResult(reqData, callback);
  },
  getMovieSearchSuggestion(reqData, callback) {
    movieController.getMovieSearchSuggestion(reqData, callback);
  },
  getMovieCollections(reqData, callback) {
    movieController.getMovieCollections(reqData, callback);
  }
};
