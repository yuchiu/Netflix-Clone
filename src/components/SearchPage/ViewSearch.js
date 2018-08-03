import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { SearchItem } from "./presentations";
import { movieActions } from "../../actions";

const ViewSearch = ({ searchResult, fetchTheMovie, fetchCast }) => (
  <div id="result-container">
    <ul>
      {searchResult.map(movie => (
        <SearchItem
          key={movie.id}
          movie={movie}
          fetchTheMovie={fetchTheMovie}
          fetchCast={fetchCast}
        />
      ))}
    </ul>
  </div>
);

ViewSearch.propTypes = {
  fetchTheMovie: Proptypes.func,
  fetchCast: Proptypes.func,
  searchResult: Proptypes.array
};

const stateToProps = state => ({
  searchResult: state.searchReducer.searchResult
});

const dispatchToProps = dispatch => ({
  fetchTheMovie: movieId => {
    dispatch(movieActions.fetchTheMovie(movieId));
  },
  fetchCast: movieId => {
    dispatch(movieActions.fetchCast(movieId));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(ViewSearch);
