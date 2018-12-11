const movieController = {
  getMovieList: (req, res) => {
    try {
      res.status(200).send({
        meta: {
          type: "success",
          status: 200,
          message: ""
        },
        movieList: ["somelist"]
      });
    } catch (err) {
      res.status(500).send({
        meta: {
          type: "error",
          status: 500,
          message: "server error"
        }
      });
    }
  }
};

export default movieController;
