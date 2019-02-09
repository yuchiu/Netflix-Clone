import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import sessionStore from "@/utils/sessionStore";
import { userSelector } from "@/selectors";

class AuthRoute extends React.Component {
  render() {
    const isUserAuthenticated = sessionStore.getLoginStatus();
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isUserAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )
        }
      />
    );
  }
}

AuthRoute.propTypes = {
  isUserAuthenticated: PropTypes.bool.isRequired
};

const stateToProps = state => ({
  isUserAuthenticated: userSelector.getIsUserAuthenticated(state)
});

export default connect(
  stateToProps,
  null
)(AuthRoute);
