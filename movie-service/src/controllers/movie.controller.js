import queryBody from "./queryBody";
import ESClient from "../config/ESClient.config";

const movieController = {
  getMovieList: async (req, res) => {
    ESClient.search({ index: "imdb", body: queryBody.testSearchAll })
      .then(results => {
        console.log("Response Body: ");
        console.log(results);
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        console.log("returned 10 imdb titles:");
        results.hits.hits.forEach((hit, index) =>
          console.log(`\t${index} - ${hit._source.title}`)
        );
        res.status(200).send({
          meta: {
            type: "success",
            status: 200,
            message: ""
          },
          movieList: results.hits.hits
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          meta: {
            type: "error",
            status: 500,
            message: "server error"
          }
        });
      });
  }
};

export default movieController;
