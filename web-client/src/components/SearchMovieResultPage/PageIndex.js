import React from "react";
import PropTypes from "prop-types";

class PageIndex extends React.Component {
  render() {
    const { totalMovieResultPage, currentMovieResultPage } = this.props;
    return (
      <div className="search-result-page-index">
        current page= {currentMovieResultPage}, total page=
        {totalMovieResultPage}
      </div>
    );
  }
}

export default PageIndex;
