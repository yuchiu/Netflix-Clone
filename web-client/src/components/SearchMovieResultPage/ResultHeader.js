import React from "react";
import PropTypes from "prop-types";

const ResultHeader = ({
  isLoading,
  searchTerm,
  resultFromIndex,
  resultToIndex,
  searchMatchTotal
}) => (
  <div className="search-result-header">
    {isLoading && (
      <div className="search-result-header__title">
        Searching for "{searchTerm}
      </div>
    )}
    {searchMatchTotal === 0 ? (
      <div className="search-result-header__title">
        No movie found with "{searchTerm}"
      </div>
    ) : (
      <React.Fragment>
        <div className="search-result-header__title">
          Searched for "{searchTerm}
          ", found {searchMatchTotal} movies.
          <br />
          Displaying{" "}
          {resultToIndex <= 19 ? (
            <React.Fragment>1 - {resultToIndex + 1} results</React.Fragment>
          ) : (
            <React.Fragment>
              {resultFromIndex + 1} - {resultToIndex + 1} results
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    )}
  </div>
);

ResultHeader.propTypes = {
  searchMatchTotal: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};
export default ResultHeader;
