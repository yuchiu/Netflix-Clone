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
    e.preventDefault();
    const {
      fieldsValidation,
      clearAllError,
      formFields,
      fetchSignInUser
    } = this.props;
    const fieldErrors = fieldsValidation();

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
      <main className="signin-page page-wrapper">
        {isUserAuthenticated && <Redirect to="/" />}
        <div className="signin-section">
          <SignInForm
            fieldErrors={fieldErrors}
            formFields={formFields}
            handleSignIn={this.handleSignIn}
            handleFieldChange={handleFieldChange}
          />
          <div className="signin-section__route-to">
            New to Netflix Clone?{" "}
            <span
              className="signin-section__route-to__link cursor-pointer"
              onClick={this.redirectToSignUp}
            >
              Sign Up Now
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
