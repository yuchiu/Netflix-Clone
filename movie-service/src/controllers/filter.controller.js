const filterController = {
  getFilteredData: async (req, res) => {
    res.status(200).send({
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      movieList: ["somelist"]
    });
  }
};

export default filterController;
