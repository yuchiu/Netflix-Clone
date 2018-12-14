import React from "react";
import PropTypes from "prop-types";

import "./SignUpForm.scss";
import { InlineError } from "../common";

const SignUpForm = ({
  fieldErrors,
  formFields,

  handleSignUp,
  handleFieldChange
}) => (
  <form className="signup-form">
    <h3 as="h2">Sign Up</h3>
    <div>
      <label className="form-label">Username:</label>
      {fieldErrors.username && <InlineError text={fieldErrors.username} />}
      <input
        id="username"
        type="username"
        name="username"
        value={formFields.username}
        className=""
        onChange={handleFieldChange}
        placeholder="username"
        size="large"
      />
    </div>

    <div>
      <label className="form-label">Email:</label>
      {fieldErrors.email && <InlineError text={fieldErrors.email} />}
      <input
        id="email"
        type="email"
        name="email"
        value={formFields.email}
        className=""
        onChange={handleFieldChange}
        placeholder="email"
        size="large"
      />
    </div>

    <div>
      <label className="form-label">Password:</label>
      {fieldErrors.password && <InlineError text={fieldErrors.password} />}
      <input
        id="password"
        type="password"
        name="password"
        value={formFields.password}
        className="validate"
        onChange={handleFieldChange}
        placeholder="password"
        size="large"
      />
    </div>

    <div>
      <label className="form-label">Confirm Password:</label>
      {fieldErrors.confirmPassword && (
        <InlineError text={fieldErrors.confirmPassword} />
      )}
      <input
        id="confirm_password"
        type="password"
        name="confirmPassword"
        value={formFields.confirmPassword}
        className="validate"
        onChange={handleFieldChange}
        placeholder="confirm password"
        size="large"
      />
    </div>

    <button className="" onClick={handleSignUp}>
      Register
    </button>
  </form>
);

SignUpForm.propTypes = {
  formFields: PropTypes.object.isRequired,
  fieldErrors: PropTypes.object.isRequired,

  handleFieldChange: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired
};

export default SignUpForm;
