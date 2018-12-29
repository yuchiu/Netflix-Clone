import React from "react";
import PropTypes from "prop-types";

const SearchResult = ({ searchMovieResult }) => (
  <div className="search-result-list">
    {searchMovieResult.map((movie, i) => (
      <div key={`search-result-id-${i}`}>
        <div>{movie.data.title}</div>
        <div>{movie.data.description}</div>
        <br />
      </div>
    ))}
  </div>
);

SearchResult.propTypes = {
  searchMovieResult: PropTypes.array.isRequired
};

export default SearchResult;
