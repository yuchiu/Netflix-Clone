export default (response, res) => {
  if (response) {
    res.status(response.result.meta.status).send(response.result);
  } else {
    res.status(500).send({
      meta: {
        type: "error",
        status: 500,
        message: "server error"
      }
    });
  }
};
