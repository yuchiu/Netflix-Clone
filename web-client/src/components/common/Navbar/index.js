import React from "react";

import NetflixLogoSVG from "./NetflixLogo";
import "./index.scss";

class Navbar extends React.Component {
  render() {
    const isUserAuthenticated = false;
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-start">
          <NetflixLogoSVG />
        </div>

        <div className="navbar-end">
          <div className="navbar-end__item">Search</div>
          {isUserAuthenticated ? (
            <div className="navbar-end__item">My Profile</div>
          ) : (
            <React.Fragment>
              <div className="navbar-end__item">Sign In</div>
              <div className="navbar-end__item">Sign Up</div>
            </React.Fragment>
          )}
        </div>
      </nav>
    );
  }
}
export default Navbar;
