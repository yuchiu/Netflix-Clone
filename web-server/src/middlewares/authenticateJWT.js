import jwt from "jsonwebtoken";

export default () => (req, res, next) => {
  const authorizationHeaader = req.headers.authorization;
  if (authorizationHeaader) {
    const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
    const options = {};
    try {
      // verify makes sure that the token hasn't expired and has been issued by us
      const result = jwt.verify(token, process.env.JWT_SECRET, options);

      // Let's pass back the decoded token to the request object
      req.user = result;
      // We call next to pass execution to the subsequent middleware
      next();
    } catch (err) {
      // Throw an error just in case anything goes wrong with verification
      console.log(err);
      next();
    }
  } else {
    next();
  }
};
