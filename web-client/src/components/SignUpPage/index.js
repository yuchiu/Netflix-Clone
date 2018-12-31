import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./index.scss";
import { userAction, errorAction } from "../../actions";
import { userSelector, errorSelector } from "../../selectors";
import { HOCForm, InlineError } from "../common";
import SignUpForm from "./SignUpForm";

class SignUpPage extends React.Component {
  RedirectToSignIn = () => {
    const { history } = this.props;
    history.push("/signin");
  };

  handleSignUp = e => {
    e.preventDefault();
    const {
      fetchSignUpUser,
      clearAllError,
      updateFieldErrors,
      fieldsValidation,
      formFields
    } = this.props;
    const fieldErrors = fieldsValidation();
    if (formFields.password !== formFields.confirmPassword) {
      // display error if confirm password does not match password
      updateFieldErrors({
        confirmPassword: "confirm password have to match with password"
      });
    }
    // fetch login if there are no errors
    if (Object.keys(fieldErrors).length === 0) {
      fetchSignUpUser({
        username: formFields.username,
        email: formFields.email,
        password: formFields.password
      });
      clearAllError();
    }
  };

  render() {
    const {
      isUserAuthenticated,
      error,
      fieldErrors,
      isLoading,
      formFields,

      handleFieldChange
    } = this.props;
    return (
      <main className="signup-page page-wrapper">
        {isUserAuthenticated && <Redirect to="/" />}
        <div className="signup-section">
          <SignUpForm
            fieldErrors={fieldErrors}
            formFields={formFields}
            handleSignUp={this.handleSignUp}
            handleFieldChange={handleFieldChange}
          />
          <div className="signup-section__route-to">
            Already have an account?{" "}
            <span
              className="cursor-pointer signup-section__route-to__link "
              onClick={this.RedirectToSignIn}
            >
              Sign In Now
            </span>
          </div>
          <br />
          <div className="inline-error--center">
            {error && <InlineError text={`Error: ${error}`} />}
          </div>
        </div>
      </main>
    );
  }
}

SignUpPage.propTypes = {
  isUserAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  formFields: PropTypes.object.isRequired,
  fieldErrors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  updateFieldErrors: PropTypes.func.isRequired,
  fetchSignUpUser: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  fieldsValidation: PropTypes.func.isRequired
};

const stateToProps = state => ({
  isLoading: userSelector.getUserIsLoading(state),
  isUserAuthenticated: userSelector.getIsUserAuthenticated(state),
  error: errorSelector.getError(state)
});

const dispatchToProps = dispatch => ({
  clearAllError: () => dispatch(errorAction.clearAllError()),
  fetchSignUpUser: credential => {
    dispatch(userAction.fetchSignUpUser(credential));
  },
  fetchOAuthLogin: credential => {
    dispatch(userAction.fetchOAuthLogin(credential));
  },
  createError: text => {
    dispatch(errorAction.createError(text));
  }
});

const formDataToProps = () => ({
  formFields: { username: "", email: "", password: "", confirmPassword: "" },
  fieldsToValidate: ["username", "email", "password"]
});

export default connect(
  stateToProps,
  dispatchToProps
)(HOCForm(formDataToProps)(SignUpPage));
