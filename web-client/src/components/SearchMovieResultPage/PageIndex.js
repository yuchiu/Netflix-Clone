import React from "react";
import PropTypes from "prop-types";

class PageIndex extends React.Component {
  render() {
    const {
      totalMovieResultPage,
      currentMovieResultPage,
      resultLength
    } = this.props;
    return (
      <div className="search-result-page-index">
        {resultLength > 0 && (
          <React.Fragment>
            current page= {currentMovieResultPage}, total page=
            {totalMovieResultPage}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PageIndex;
