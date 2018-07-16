import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { movieActions } from "../../actions";

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    const { input } = this.state;
    this.props.fetchSearch(input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <li>
        <input
          className="searchInput"
          type="text"
          value={this.state.input}
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
    );
  }
}
const stateToProps = () => ({});

const dispatchToProps = dispatch => ({
  fetchSearch: input => {
    dispatch(movieActions.fetchSearch(input));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(SearchInput);
