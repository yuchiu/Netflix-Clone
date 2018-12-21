import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const Button = ({ text, cssClass, handleClick }) => (
  <button className={`button ${cssClass}`} onClick={handleClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  cssClass: PropTypes.string,

  handleClick: PropTypes.func
};

export default Button;
