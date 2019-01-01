import React from "react";
import PropTypes from "prop-types";

import "./PageIndex.scss";

class PageIndex extends React.Component {
  routeToPageNum = pageIndex => {
    const { extractedParams, history } = this.props;
    const nextPageFromIndex = parseInt(pageIndex * 20, 10) - 20;
    history.push(
      `/movie-search/filter?search_term=${
        extractedParams.search_term
      }&from_index=${nextPageFromIndex}`
    );
  };

  generatePreviousPageList = () => {
    const { currentMovieResultPage } = this.props;
    const list = [];

    currentMovieResultPage !== 1
      ? list.push(
          <button
            className="page-btn-wrapper__next-previous"
            key={`page-index-previous}`}
            onClick={this.routeToPageNum.bind(this, currentMovieResultPage - 1)}
          >
            previous page
          </button>
        )
      : list.push(
          <button
            className="page-btn-wrapper__next-previous page-btn-wrapper__next-previous--disabled"
            key={`page-index-previous}`}
          >
            previous page
          </button>
        );
    // if currentMovieResultPage is less than 5, we only need to render until we hit page 1
    // for ex: currentMovieResultPage===3, list = [1,2,3]
    if (currentMovieResultPage < 6) {
      for (let i = 1; i < currentMovieResultPage; i++) {
        list.push(
          <div
            className="page-btn-wrapper__index"
            key={`page-index-${i}`}
            onClick={this.routeToPageNum.bind(this, i)}
          >
            {i}
          </div>
        );
      }
    }
    // if currentMovieResultPage is larger than 5, we need to render previous 4 pages of currentMovieResultPage and additional of first page
    // for ex: currentMovieResultPage===25, list = [1,22,23,24]
    else {
      list.push(
        <div
          className="page-btn-wrapper__index"
          key={`page-index-0}`}
          onClick={this.routeToPageNum.bind(this, 1)}
        >
          1...
        </div>
      );
      for (let i = 3; i > 0; i--) {
        list.push(
          <div
            className="page-btn-wrapper__index"
            key={`page-index-${i}`}
            onClick={this.routeToPageNum.bind(this, currentMovieResultPage - i)}
          >
            {currentMovieResultPage - i}
          </div>
        );
      }
    }
    return list;
  };

  generateNextPageList = () => {
    const { currentMovieResultPage, totalMovieResultPage } = this.props;
    const list = [];

    // if currentMovieResultPage is larger than totalpage number - 5, than we only need to render pages until we hit the total pages
    // for ex: currentMovieResultPage===273, totalMovieResultPage===276, list = [274,275,276]
    if (currentMovieResultPage > totalMovieResultPage - 5) {
      for (
        let i = currentMovieResultPage + 1;
        i < totalMovieResultPage + 1;
        i++
      ) {
        list.push(
          <div
            className="page-btn-wrapper__index"
            key={`page-index-${i}`}
            onClick={this.routeToPageNum.bind(this, i)}
          >
            {i}
          </div>
        );
      }
    }
    // if currentMovieResultPage is less than totalpage number - 4, than we will render next 3 pages and last page
    // for ex: currentMovieResultPage===265, totalMovieResultPage===276, list = [266,267,268,269]
    else {
      for (
        let i = currentMovieResultPage + 1;
        i < currentMovieResultPage + 4;
        i++
      ) {
        list.push(
          <div
            className="page-btn-wrapper__index"
            key={`page-index-${i}`}
            onClick={this.routeToPageNum.bind(this, i)}
          >
            {i}
          </div>
        );
      }
      list.push(
        <div
          className="page-btn-wrapper__index"
          key={`page-index-${totalMovieResultPage}`}
          onClick={this.routeToPageNum.bind(this, totalMovieResultPage)}
        >
          ...
          {totalMovieResultPage}
        </div>
      );
    }
    currentMovieResultPage !== totalMovieResultPage
      ? list.push(
          <button
            className="page-btn-wrapper__next-previous"
            key={`page-index-next}`}
            onClick={this.routeToPageNum.bind(this, currentMovieResultPage + 1)}
          >
            next page
          </button>
        )
      : list.push(
          <button
            className="page-btn-wrapper__next-previous page-btn-wrapper__next-previous--disabled"
            key={`page-index-next}`}
          >
            next page
          </button>
        );
    return list;
  };

  render() {
    const { totalMovieResultPage, currentMovieResultPage } = this.props;
    return (
      <div className="search-result-page-index">
        {totalMovieResultPage > 1 && (
          <div className="page-btn-wrapper">
            {this.generatePreviousPageList()}
            <div
              className="page-btn-wrapper__index page-btn-wrapper__index--current"
              key={`page-index-${currentMovieResultPage}`}
            >
              {currentMovieResultPage}
            </div>
            {this.generateNextPageList()}
          </div>
        )}
      </div>
    );
  }
}

export default PageIndex;
