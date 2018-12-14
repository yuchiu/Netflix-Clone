import Validator from "validator";

export default {
  singin: data => {
    const formErrors = {};
    if (!data.username) {
      formErrors.username = "Can't be blank";
    } else if (data.username.length < 4 || data.username.length > 32) {
      formErrors.username = "Length of user name have to be between 4 to 32";
    }
    if (!data.password) {
      formErrors.password = "Can't be blank";
    } else if (data.password.length < 4 || data.password.length > 32) {
      formErrors.password = "Length of user name have to be between 4 to 32";
    }
    return formErrors;
  },
  signup: data => {
    const formErrors = {};
    if (!data.username) {
      formErrors.username = "Can't be blank";
    } else if (data.username.length < 3 || data.username.length > 32) {
      formErrors.username = "Length of user name have to be between 3 to 32";
    }
    if (!data.password) {
      formErrors.password = "Can't be blank";
    } else if (data.password.length < 4 || data.password.length > 32) {
      formErrors.password = "Length of password have to be between 4 to 32";
    }
    if (!data.email) {
      formErrors.email = "Can't be blank";
    } else if (!Validator.isEmail(data.email)) {
      formErrors.email = "Invalid email";
    }
    return formErrors;
  }
};
