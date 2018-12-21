import Joi from "joi";

const registerRule = credentials => {
  const schema = {
    username: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{4,32}$")),
    email: Joi.string().email(),
    password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{4,32}$"))
  };
  const { error, value } = Joi.validate(credentials, schema);
  if (error) {
    switch (error.details[0].context.key) {
      case "email":
        return {
          meta: {
            type: "error",
            status: 403,
            message: "email address is not valid"
          }
        };
      case "username":
        return {
          meta: {
            type: "error",
            status: 403,
            message: `username is not valid
            <br/>
            1. It must be at least 4 characters and not greater than 32 characters.`
          }
        };

      case "password":
        return {
          meta: {
            type: "error",
            status: 403,
            message: `the password provided failed to match the following rules:
              <br/>
              1. It must contain ONLY the following characters: lower case, upper case, numerics
              <br/>
              2. It must be at least 4 characters and not greater than 32 characters.
              `
          }
        };

      default:
        return {
          meta: {
            type: "error",
            status: 403,
            message: "invalid registration infomation"
          }
        };
    }
  } else {
    return null; // return null if no errors in validation
  }
};
module.exports = registerRule;
