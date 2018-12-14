import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./index.scss";
import { userAction, errorAction } from "../../actions";
import { GOOGLE_CLIENT_ID } from "../../utils/secrets";
import { userSelector, errorSelector } from "../../selectors";
import { SocialButton, HOCForm, InlineError } from "../common";
import SignUpForm from "./SignUpForm";

class SignUpPage extends React.Component {
  RedirectToSignIn = () => {
    const { history } = this.props;
    history.push("/signin");
  };

  handleSignUp = e => {
    const {
      fetchSignUpUser,
      clearAllError,
      updateFieldErrors,
      fieldsValidation,
      formFields
    } = this.props;
    e.preventDefault();
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

  handleSocialLogin = res => {
    const { fetchOAuthLogin, clearAllError } = this.props;
    console.log(res);
    const user = {
      provider: res.provider,
      username: res.profile.firstName + res.profile.lastName,
      email: res.profile.email,
      avatarurl: res.profile.profilePicURL,
      access_token: res.token.accessToken
    };
    fetchOAuthLogin(user);
    clearAllError();
  };

  handleSocialLoginFailure = err => {
    console.error(err);
    const { createError, error } = this.props;
    createError(error);
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
      <main className="signup-page">
        {isUserAuthenticated && <Redirect to="/" />}
        <div className="signup-section">
          <SignUpForm
            fieldErrors={fieldErrors}
            formFields={formFields}
            handleSignUp={this.handleSignUp}
            handleFieldChange={handleFieldChange}
          />
          Already have an account?{" "}
          <span className="pointer-cursor" onClick={this.RedirectToSignIn}>
            Sign In
          </span>
          <br />
          <br />
          Or Sign In With:
          <br />
          <div className="social-btn-group">
            <SocialButton
              provider="google"
              appId={GOOGLE_CLIENT_ID}
              onLoginSuccess={this.handleSocialLogin}
              onLoginFailure={this.handleSocialLoginFailure}
            >
              <i className="fab fa-google-plus-g fa-2x" />
              Google
            </SocialButton>
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
