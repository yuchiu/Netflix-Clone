const normalizeMovieData = movieList =>
  movieList.map(movie => {
    const normalizedMovie = { data: {} };
    normalizedMovie.id = movie.id;
    normalizedMovie.movieId = movie.movie_id;
    normalizedMovie.userId = movie.user_id;
    normalizedMovie.created_at = movie.created_at;
    normalizedMovie.updated_at = movie.updated_at;
    normalizedMovie.data.poster = movie.movie_poster;
    normalizedMovie.data.trailer_img = movie.movie_trailer_img;
    normalizedMovie.data.title = movie.movie_title;
    normalizedMovie.data.description = movie.movie_description;
    normalizedMovie.data.imdb_ratingValue = movie.movie_rating;
    normalizedMovie.data.imdb_ratingCount = movie.movie_rating_count;
    return normalizedMovie;
  });

const getCurrentUser = state => state.userReducer.currentUser;
const getCurrentUsername = state => state.userReducer.currentUser.username;
const getIsUserAuthenticated = state => state.userReducer.isUserAuthenticated;
const getUserIsLoading = state => state.userReducer.isLoading;
const getHistories = state => normalizeMovieData(state.userReducer.histories);
const getBookmarks = state => normalizeMovieData(state.userReducer.bookmarks);

export default {
  getCurrentUser,
  getCurrentUsername,
  getIsUserAuthenticated,
  getBookmarks,
  getHistories,
  getUserIsLoading
};
