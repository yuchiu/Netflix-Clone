import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { SearchItem } from "./presentations";
import { movieAction } from "@/actions";

class ViewSearch extends React.Component {
  componentDidMount() {
    const {
      fetchSearch,
      match: {
        params: { searchInput }
      }
    } = this.props;
    fetchSearch(searchInput);
  }

  componentWillUnmount() {
    const { clearSearchResult } = this.props;
    clearSearchResult();
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
  fetchTheMovie: Proptypes.func,
  fetchCast: Proptypes.func,
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
