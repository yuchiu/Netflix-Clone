import React from "react";
import { withRouter } from "react-router-dom";

import NetflixLogoSVG from "./NetflixLogo";
import "./index.scss";

class Navbar extends React.Component {
  routeToLanding = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { history } = this.props;
    const isUserAuthenticated = false;
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-start">
          <NetflixLogoSVG routeToLanding={this.routeToLanding} />
        </div>

        <div className="navbar-end">
          <div className="navbar-end__item">Search</div>
          {isUserAuthenticated ? (
            <div
              className="navbar-end__item pointer-cursor"
              onClick={() => history.push("/")}
            >
              My Profile
            </div>
          ) : (
            <React.Fragment>
              <div
                className="navbar-end__item pointer-cursor"
                onClick={() => history.push("/signin")}
              >
                Sign In
              </div>
              <div
                className="navbar-end__item pointer-cursor"
                onClick={() => history.push("/signup")}
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
export default withRouter(Navbar);
