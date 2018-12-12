const { NODE_ENV } = require("../config/secrets");

export default (err, res) => {
  if (NODE_ENV !== "production") console.log(err);
  res.status(500).send({
    meta: {
      type: "error",
      status: 500,
      message: "server error"
    }
  });
};
