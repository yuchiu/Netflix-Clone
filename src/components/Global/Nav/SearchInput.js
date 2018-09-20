import React from "react";
import Proptypes from "prop-types";

import "./SearchInput.scss";
import { withRouter } from "react-router-dom";

class SearchInput extends React.Component {
  state = {
    input: "",
    ENTER_KEY: 13
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = () => {
    const { input } = this.state;
    const { history } = this.props;
    if (input.length === 0) {
      return;
    }
    history.push(`/search/${input}`);
    this.setState({ input: "" });
  };

  render() {
    const { input, ENTER_KEY } = this.state;
    return (
      <li>
        <input
          className="searchInput"
          type="text"
          value={this.state.input}
          placeholder="movie title..."
          onChange={this.handleChange}
          onKeyDown={e => {
            if (e.keyCode === ENTER_KEY) this.handleSubmit();
          }}
        />
        <span className="navItem search-icon ">
          <i className="fas fa-search" onClick={this.handleSubmit} />
        </span>
      </li>
    );
  }
}

export default withRouter(SearchInput);
