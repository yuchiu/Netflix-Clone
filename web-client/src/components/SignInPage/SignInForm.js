import React from "react";
import PropTypes from "prop-types";

import "./SignInForm.scss";
import { InlineError } from "../common";

const SignInForm = ({
  fieldErrors,
  formFields,

  handleSignIn,
  handleFieldChange
}) => (
  <form className="signin-form">
    <h3 as="h2">Sign In</h3>
    <div>
      <label className="form-label">Email:</label>
      {fieldErrors.email && <InlineError text={fieldErrors.email} />}
      <input
        id="email"
        type="text"
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
    <button className="" onClick={handleSignIn}>
      Log In
    </button>
  </form>
);

SignInForm.propTypes = {
  formFields: PropTypes.object.isRequired,
  fieldErrors: PropTypes.object.isRequired,

  handleSignIn: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired
};

export default SignInForm;
