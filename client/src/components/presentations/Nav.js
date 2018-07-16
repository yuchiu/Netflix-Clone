import React from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleClick() {
    this.props.movieActions.fetchSearch(this.state.searchInput);
    this.setState({ searchInput: "" });
  }

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
            <li>
              <input
                className="searchInput"
                type="text"
                value={this.state.searchInput}
                placeholder="movie title..."
                onChange={this.handleChange.bind(this)}
              />
              <Link
                className=" navItem"
                to="/search"
                onClick={this.handleClick.bind(this)}
              >
                <img
                  style={{
                    width: 30,
                    height: 30
                  }}
                  src="http://tendenzen.plamen.org/img/search.png"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
