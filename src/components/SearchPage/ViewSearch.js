import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { SearchItem } from "./presentations";
import { movieAction } from "@/actions";

class ViewSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParam: ""
    };
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  componentDidMount() {
    this.fetchSearch();
  }

  componentDidUpdate() {
    const {
      match: {
        params: { searchInput }
      }
    } = this.props;
    const { currentParam } = this.state;

    if (currentParam !== searchInput) this.fetchSearch();
  }

  fetchSearch = () => {
    const {
      fetchSearch,
      match: {
        params: { searchInput }
      }
    } = this.props;
    fetchSearch(searchInput);
    this.setState({ currentParam: searchInput });
  };

  componentWillUnmount() {
    const { clearSearchResult } = this.props;
    clearSearchResult();
    this.setState({ currentParam: "" });
  }

  render() {
    const { searchResult } = this.props;
    return (
      <div id="result-container">
        <ul>
          {searchResult.map(movie => (
            <SearchItem key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    );
  }
}
ViewSearch.propTypes = {
  searchResult: Proptypes.array
};

const stateToProps = state => ({
  searchResult: state.searchReducer.searchResult
});

const dispatchToProps = dispatch => ({
  fetchSearch: input => {
    dispatch(movieAction.fetchSearch(input));
  },
  clearSearchResult: () => dispatch(movieAction.clearSearchResult())
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(ViewSearch)
);
