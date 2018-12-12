exports.devErrorHandler = (err, req, res, next) => {
  // eslint-disable-next-line
    err.stack = err.stack || "";
  const status = err.status || 500;
  const error = { message: err.message };
  res.status(status);
  res.json({ status, error });
};
