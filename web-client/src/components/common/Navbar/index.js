import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { userAction } from "@/actions";
import { userSelector } from "@/selectors";
import NetflixLogoSVG from "./NetflixLogo";
import "./index.scss";
import SearchBar from "../SearchBar";

class Navbar extends React.Component {
  routeToLanding = () => {
    const { history } = this.props;
    history.push("/");
  };

  routeToSignin = () => {
    const { history } = this.props;
    history.push("/signin");
  };

  routeToSignup = () => {
    const { history } = this.props;
    history.push("/signup");
  };

  routeToMyProfile = () => {
    const { history } = this.props;
    history.push("/my-profile");
  };

  handleSignout = () => {
    const { signOutUser } = this.props;
    signOutUser();
  };

  render() {
    const { isUserAuthenticated } = this.props;
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-start">
          <NetflixLogoSVG routeToLanding={this.routeToLanding} />
        </div>

        <div className="navbar-end">
          <SearchBar cssClass="navbar-end__item" />
          {isUserAuthenticated ? (
            <React.Fragment>
              <div
                className="navbar-end__item pointer-cursor"
                onClick={this.routeToMyProfile}
              >
                My Profile
              </div>
              <div
                className="navbar-end__item pointer-cursor"
                onClick={this.handleSignout}
              >
                Sign Out
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div
                className="navbar-end__item pointer-cursor"
                onClick={this.routeToSignin}
              >
                Sign In
              </div>
              <div
                className="navbar-end__item pointer-cursor"
                onClick={this.routeToSignup}
              >
                Sign Up
              </div>
            </React.Fragment>
          )}
        </div>
      </nav>
    );
  }
}

const dispatchToProps = dispatch => ({
  signOutUser: () => {
    dispatch(userAction.signOutUser());
  }
});

const stateToProps = state => ({
  isLoading: userSelector.getUserIsLoading(state),
  isUserAuthenticated: userSelector.getIsUserAuthenticated(state)
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(Navbar)
);
