import models from "../models";

export default {
  async createMovieBookmark(reqData, callback) {
    const { userId, movieData } = reqData;
    try {
      const isBookmarkCreated = await models.MovieBookmark.findOne({
        where: { user_id: userId, movie_id: movieData.movieId },
        raw: true
      });
      if (isBookmarkCreated) {
        const response = {
          meta: {
            type: "error",
            status: 403,
            message: `Movie "${movieData.movieTitle}", id "${
              movieData.movieId
            }" is already bookmarked`
          }
        };
        callback(null, response);
        return;
      }
      await models.MovieBookmark.create({
        user_id: userId,
        movie_id: movieData.movieId,
        movie_poster: movieData.moviePoster,
        movie_trailer_img: movieData.movieTrailerImg,
        movie_title: movieData.movieTitle,
        movie_description: movieData.movieDescription,
        movie_rating: parseFloat(movieData.movieRating),
        movie_rating_count: parseInt(movieData.movieRatingCount, 10)
      });
      const bookmarks = await this.getUserBookmark(userId);
      const response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        bookmarks
      };
      callback(null, response);
    } catch (err) {
      console.log(err);
      callback(null, {
        meta: {
          type: "error",
          status: 500,
          message: "server error"
        }
      });
    }
  },

  async getUserBookmark(userId) {
    const bookmark = await models.MovieBookmark.findAll({
      order: [["created_at", "DESC"]],
      where: { user_id: userId },
      offset: 0,
      raw: true
    });
    return bookmark;
  },

  async removeMovieBookmark(reqData, callback) {
    const { userId, bookmarkId } = reqData;
    try {
      const bookmark = await models.MovieBookmark.findOne({
        where: {
          id: bookmarkId,
          user_id: userId
        }
      });
      if (!bookmark) {
        const response = {
          meta: {
            type: "error",
            status: 400,
            message: "Do not have access to this bookmark"
          }
        };
        callback(null, response);
        return;
      }
      await bookmark.destroy();
      const bookmarks = await this.getUserBookmark(userId);
      const response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        bookmarks
      };
      callback(null, response);
    } catch (err) {
      console.log(err);
      callback(null, {
        meta: {
          type: "error",
          status: 500,
          message: "server error"
        }
      });
    }
  }
};
