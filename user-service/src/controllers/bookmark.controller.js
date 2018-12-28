import models from "../models";

export default {
  async createMovieBookmark(reqData, callback) {
    const { userId, movieId } = reqData;
    try {
      const bookmark = await models.MovieBookmark.create({
        movie_id: movieId,
        user_id: userId
      });
      const response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        bookmark
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
