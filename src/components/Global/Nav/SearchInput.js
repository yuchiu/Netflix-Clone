import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { movieActions } from "../../../actions";
import searchIcon from "../../../../assets/img/search-icon.png";

class SearchInput extends React.Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    const { fetchSearch } = this.props;
    const { input } = this.state;
    fetchSearch(input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <li>
        <input
          className="searchInput"
          type="text"
          value={this.state.input}
          placeholder="movie title..."
          onChange={this.handleChange}
        />
        <Link className=" navItem" to="/search" onClick={this.handleClick}>
          <img
            style={{
              width: 30,
              height: 30
            }}
            src={searchIcon}
          />
        </Link>
      </li>
    );
  }
}
SearchInput.propTypes = {
  fetchSearch: Proptypes.func
};
const stateToProps = null;

const dispatchToProps = dispatch => ({
  fetchSearch: input => {
    dispatch(movieActions.fetchSearch(input));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(SearchInput);
