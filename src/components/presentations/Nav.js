import React from "react";
import { NavLink } from "react-router-dom";
import { SearchInput } from "../containers";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" className="logo navItem">
                <img
                  style={{
                    width: 110,
                    height: 30
                  }}
                  src="https://vignette4.wikia.nocookie.net/marvelcinematicuniverse/images/a/a1/Netflix-logo.png/revision/latest?cb=20150221002257"
                />
              </NavLink>
            </li>
          </ul>

          <ul>
            <SearchInput />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
