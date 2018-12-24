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
  <form className="auth-form signin-form">
    <h3 className="auth-form__header signin-form__header">Sign In</h3>
    <div className="auth-form__email signin-form__email">
      <label className="auth-form-label signin-form-label">Email:</label>
      {fieldErrors.email && <InlineError text={fieldErrors.email} />}
      <input
        type="text"
        name="email"
        value={formFields.email}
        className="auth-form-input signin-form-input"
        onChange={handleFieldChange}
        placeholder="email"
      />
    </div>
    <div className="auth-form__password signin-form__password">
      <label className="auth-form-labe signin-form-label">Password:</label>
      {fieldErrors.password && <InlineError text={fieldErrors.password} />}
      <input
        className="auth-form-input signin-form-input"
        type="password"
        name="password"
        value={formFields.password}
        onChange={handleFieldChange}
        placeholder="password"
      />
    </div>
    <Button
      cssClass="auth-form__btn signin-form__btn"
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
