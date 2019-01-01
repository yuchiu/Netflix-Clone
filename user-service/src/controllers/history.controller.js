import models from "../models";

export default {
  async createMovieHistory(reqData, callback) {
    const { userId, movieData } = reqData;
    try {
      await models.MovieHistory.create({
        user_id: userId,
        movie_id: movieData.movieId,
        movie_poster: movieData.moviePoster,
        movie_trailer_img: movieData.movieTrailerImg,
        movie_title: movieData.movieTitle,
        movie_description: movieData.movieDescription,
        movie_rating: parseFloat(movieData.movieRating),
        movie_rating_count: parseInt(movieData.movieRatingCount, 10)
      });
      const histories = await this.getUserHistory(userId);
      const response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        histories
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
  async getUserHistory(userId) {
    const histories = await models.MovieHistory.findAll({
      order: [["created_at", "DESC"]],
      where: { user_id: userId },
      limit: 100,
      offset: 0,
      raw: true
    });
    // removed duplicated movie history
    const uniqueHistoryList = histories.reduce((unique, o) => {
      if (
        !unique.some(
          obj => obj.movie_id === o.movie_id && obj.value === o.value
        )
      ) {
        unique.push(o);
      }
      return unique;
    }, []);
    return uniqueHistoryList;
  }
};
