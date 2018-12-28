export default (req, res, next) => {
  const { user } = req;
  if (!user) {
    res.status(400).send({
      meta: {
        type: "error",
        status: 400,
        message: "user needs to be authenticated"
      }
    });
  } else {
    next();
  }
};
