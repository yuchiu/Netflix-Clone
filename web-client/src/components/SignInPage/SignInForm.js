import React from "react";
import PropTypes from "prop-types";

import "./SignInForm.scss";
import { InlineError, Button } from "../common";

const SignInForm = ({
  fieldErrors,
  formFields,

  handleSignIn,
  handleFieldChange
}) => (
  <form className="signin-form">
    <h3 className="signin-form__header">Sign In</h3>
    <div className="signin-form__email">
      <label className="signin-form-label">Email:</label>
      {fieldErrors.email && <InlineError text={fieldErrors.email} />}
      <input
        type="text"
        name="email"
        value={formFields.email}
        className="signin-form-input"
        onChange={handleFieldChange}
        placeholder="email"
      />
    </div>
    <div className="signin-form__password">
      <label className="auth-form-labe signin-form-label">Password:</label>
      {fieldErrors.password && <InlineError text={fieldErrors.password} />}
      <input
        className="signin-form-input"
        type="password"
        name="password"
        value={formFields.password}
        onChange={handleFieldChange}
        placeholder="password"
      />
    </div>
    <Button
      cssClass="signin-form__btn"
      text="Sign In"
      handleClick={handleSignIn}
    />
  </form>
);

SignInForm.propTypes = {
  formFields: PropTypes.object.isRequired,
  fieldErrors: PropTypes.object.isRequired,

  handleSignIn: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired
};

export default SignInForm;
