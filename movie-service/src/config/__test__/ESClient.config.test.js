const elasticsearch = require("elasticsearch");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });
const ESClient = new elasticsearch.Client({
  host: `${process.env.SERVICE_MOVIE_URL}:${
    process.env.SERVICE_MOVIE_DB_ELASTICSEARCH_PORT
  }`,
  log: process.env.SERVICE_MOVIE_DB_ELASTICSEARCH_LOG
});

function testIndices() {
  return ESClient.cat
    .indices({ v: true })
    .then(result => {
      console.log("|Test Indices|");
      console.log("-----------------------------------");
      console.log("Response Body: ");
      console.log(result);
    })
    .catch(err => console.error(`Error connecting to the es client: ${err}`));
}

function testMapping() {
  return ESClient.indices
    .getMapping({ index: "imdb" })
    .then(result => {
      console.log("|Test Mapping|");
      console.log("-----------------------------------");
      console.log("Response Body: ");
      console.log(JSON.stringify(result));
    })
    .catch(err => console.error(`Error connecting to the es client: ${err}`));
}
function testSearchAll() {
  ESClient.search({
    index: "imdb",
    body: {
      size: 10,
      from: 0,
      query: {
        match_all: {}
      }
    }
  })
    .then(results => {
      console.log("|Test SearchAll|");
      console.log("-----------------------------------");
      console.log("Response Body: ");
      console.log(results);
      console.log(`found ${results.hits.total} items in ${results.took}ms`);
      console.log("returned 10 imdb titles:");
      results.hits.hits.forEach((hit, index) =>
        console.log(`\t${index} - ${hit._source.title}`)
      );
    })
    .catch(console.error);
}

(() => {
  testIndices();
  testMapping();
  testSearchAll();
})();
