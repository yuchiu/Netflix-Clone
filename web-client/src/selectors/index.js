import {
  getCurrentUser,
  getIsUserLoggedIn,
  getCurrentUsername,
  getUserIsLoading
} from "./user.selector";
import { getError } from "./error.selector";
import {
  getMovieIsLoading,
  getSelectedMovie,
  getMovieCollectionList
} from "./movie.selector";

const movieSelector = {
  getMovieIsLoading: state => getMovieIsLoading(state),
  getSelectedMovie: state => getSelectedMovie(state),
  getMovieCollectionList: state => getMovieCollectionList(state)
};

const userSelector = {
  getCurrentUsername: state => getCurrentUsername(state),
  getIsUserLoggedIn: state => getIsUserLoggedIn(state),
  getCurrentUser: state => getCurrentUser(state),
  getUserIsLoading: state => getUserIsLoading(state)
};
const errorSelector = {
  getError: state => getError(state)
};

export { userSelector, movieSelector, errorSelector };
