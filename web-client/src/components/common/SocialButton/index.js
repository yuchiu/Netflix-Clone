import React from "react";
import PropTypes from "prop-types";
import SocialLogin from "react-social-login";

import "./index.scss";

class Button extends React.Component {
  static propTypes = {
    triggerLogin: PropTypes.func.isRequired
  };

  render() {
    const { children, triggerLogin, ...props } = this.props;
    return (
      <div
        onClick={triggerLogin}
        className={`social-btn social-btn--${children[1]}`}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default SocialLogin(Button);
