import React from "react";
import PropTypes from "prop-types";

class PageIndex extends React.Component {
  routeToPreviousPage = () => {
    const { extractedParams, history } = this.props;
    const nextPageFromIndex = parseInt(extractedParams.from_index, 10) - 20;
    if (extractedParams.from_index >= 20) {
      history.push(
        `/movie-search/filter?search_term=${
          extractedParams.search_term
        }&from_index=${nextPageFromIndex}`
      );
    } else {
      console.log("from_index has to larger than 19");
    }
  };

  routeToNextPage = () => {
    console.log("dsadsa");
    const { extractedParams, history } = this.props;
    const nextPageFromIndex = parseInt(extractedParams.from_index, 10) + 20;
    history.push(
      `/movie-search/filter?search_term=${
        extractedParams.search_term
      }&from_index=${nextPageFromIndex}`
    );
  };

  render() {
    const { totalMovieResultPage, currentMovieResultPage } = this.props;
    return (
      <div className="search-result-page-index">
        {totalMovieResultPage > 1 && (
          <React.Fragment>
            current page= {currentMovieResultPage}, total page=
            {totalMovieResultPage}
            <button onClick={this.routeToPreviousPage}>previous page</button>
            <button onClick={this.routeToNextPage}>next page</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PageIndex;
