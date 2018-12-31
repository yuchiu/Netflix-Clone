import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class SearchResult extends React.Component {
  routeToMoviePage = movieId => {
    const { history } = this.props;
    history.push(`/movie/${movieId}`);
  };

  render() {
    const { searchMovieResult } = this.props;
    return (
      <div className="search-result-list">
        {searchMovieResult.map((movie, i) => (
          <div key={`search-result-id-${i}`}>
            <div>{movie.data.title}</div>
            <div>{movie.data.description}</div>
            <div
              className="cursor-pointer"
              onClick={this.routeToMoviePage.bind(this, movie.id)}
            >
              Link
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

SearchResult.propTypes = {
  searchMovieResult: PropTypes.array.isRequired
};

export default withRouter(SearchResult);
