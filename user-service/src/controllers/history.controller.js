import models from "../models";

export default {
  async createBrowsingHistory(reqData, callback) {
    const { userId, movieId } = reqData;
    try {
      const history = await models.BrowsingHistory.create({
        movie_id: movieId,
        user_id: userId
      });
      const response = {
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        history
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
