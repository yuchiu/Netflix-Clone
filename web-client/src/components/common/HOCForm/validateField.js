import validator from "validator";

export default (fieldName, data) => {
  let error;
  switch (fieldName) {
    case "username":
      if (!data) {
        error = "rsername can't be blank";
      }
      if (data.length < 4 || data.length > 32) {
        error = "length of username have to be between 4 to 32";
      }
      if (!/^[a-z0-9]+$/i.test(data)) {
        error =
          "only number and characters, special characters and space are not allowed";
      }
      return error;

    case "password":
      if (!data) {
        error = "password can't be blank";
      }
      if (data.length < 4 || data.length > 32) {
        error = "length of password have to be between 4 to 32";
      }
      return error;

    case "email":
      if (!validator.isEmail(data)) {
        error = "invalid email";
      }
      return error;

    default:
      return error;
  }
};
