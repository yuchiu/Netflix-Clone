export default (message, callback) => {
  callback(null, {
    meta: {
      type: "error",
      status: 400,
      message
    }
  });
};
