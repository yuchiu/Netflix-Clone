import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./index.scss";
import { userAction, errorAction } from "../../actions";
import { userSelector, errorSelector } from "../../selectors";
import { HOCForm, InlineError } from "../common";
import SignInForm from "./SignInForm";

class SignInPage extends React.Component {
  redirectToSignUp = () => {
    const { history } = this.props;
    history.push("/signup");
  };

  handleSignIn = e => {
    const {
      fieldsValidation,
      clearAllError,
      formFields,
      fetchSignInUser
    } = this.props;
    const fieldErrors = fieldsValidation();

    e.preventDefault();
    // fetch login if there are no errors
    if (Object.keys(fieldErrors).length === 0) {
      fetchSignInUser(formFields);
      clearAllError();
    }
  };

  render() {
    const {
      isUserAuthenticated,
      error,
      isLoading,
      fieldErrors,
      formFields,

      handleFieldChange
    } = this.props;
    return (
      <main className="signin-page auth-page page-wrapper">
        {isUserAuthenticated && <Redirect to="/" />}
        <div className="signin-section auth-section">
          <SignInForm
            fieldErrors={fieldErrors}
            formFields={formFields}
            handleSignIn={this.handleSignIn}
            handleFieldChange={handleFieldChange}
          />
          New to Slack Clone?{" "}
          <span className="pointer-cursor" onClick={this.redirectToSignUp}>
            Sign Up
          </span>
          <br />
          Or Sign In With:
          <br />
          <div className="inline-error--center">
            {error && <InlineError text={`Error: ${error}`} />}
          </div>
        </div>
      </main>
    );
  }
}

SignInPage.propTypes = {
  isUserAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  formFields: PropTypes.object.isRequired,
  fieldErrors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  fetchSignInUser: PropTypes.func.isRequired,
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
  fetchSignInUser: credential => {
    dispatch(userAction.fetchSignInUser(credential));
  },
  fetchOAuthLogin: credential => {
    dispatch(userAction.fetchOAuthLogin(credential));
  },
  createError: text => {
    dispatch(errorAction.createError(text));
  }
});

const formDataToProps = () => ({
  formFields: { email: "", password: "" },
  fieldsToValidate: ["email", "password"]
});

export default connect(
  stateToProps,
  dispatchToProps
)(HOCForm(formDataToProps)(SignInPage));
