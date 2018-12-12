const { NODE_ENV } = require("./secrets");

const catchExceptions = func => (req, res, next) => {
  Promise.resolve(func(req, res)).catch(err => {
    if (NODE_ENV === "development") console.log(err);
    res.status(500).send({
      meta: {
        type: "error",
        status: 500,
        message: "server error"
      }
    });
    next();
  });
};
module.exports = catchExceptions;
