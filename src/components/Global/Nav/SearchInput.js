import React from "react";
import Proptypes from "prop-types";

import { Link } from "react-router-dom";
import searchIcon from "@/assets/img/search-icon.png";

class SearchInput extends React.Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;
    return (
      <li>
        <input
          className="searchInput"
          type="text"
          value={this.state.input}
          placeholder="movie title..."
          onChange={this.handleChange}
        />
        <Link
          className=" navItem"
          to={`/search/${input}`}
          onClick={this.handleClick}
        >
          <img
            style={{
              width: 30,
              height: 30
            }}
            src={searchIcon}
            alt="img"
          />
        </Link>
      </li>
    );
  }
}

export default SearchInput;
