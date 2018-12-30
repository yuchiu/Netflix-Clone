import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import queryString from "query-string";
import isEqual from "lodash/isEqual";

import { searchAction } from "@/actions";
import { searchSelector } from "@/selectors";
import ResultHeader from "./ResultHeader";
import SearchResult from "./SearchResult";
import PageIndex from "./PageIndex";
import "./index.scss";

class SearchMovieResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParams: {}
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  componentDidUpdate() {
    const { currentParams } = this.state;
    /* fetch search if param has changed */
    const extractedParams = this.extractQueryString();
    if (currentParams.search_term !== extractedParams.search_term)
      this.handleSearch();
  }

  componentWillUnmount() {
    this.setState({ currentParams: "" });
  }

  extractQueryString = () => {
    const params = queryString.parse(this.props.location.search);
    return params;
  };

  handleSearch = () => {
    const {
      fetchSearchMovie,
      currentSearchTerm,
      resultToIndex,
      resultFromIndex
    } = this.props;
    const extractedParams = this.extractQueryString();
    /**
     * if user updated searchquery
     */
    if (isEqual(currentSearchTerm, extractedParams)) {
      fetchSearchMovie({
        searchTerm: extractedParams.search_term,
        nextPageFromIndex: resultToIndex + 1
      });
    } else {
      fetchSearchMovie({
        searchTerm: extractedParams.search_term,
        nextPageFromIndex: resultFromIndex
      });
    }
    this.setState({ currentParams: extractedParams });
  };

  render() {
    const {
      isLoading,
      searchMatchTotal,
      resultFromIndex,
      resultToIndex,
      searchMovieResult,
      totalMovieResultPage,
      currentMovieResultPage
    } = this.props;
    const extractedParams = this.extractQueryString();
    return (
      <div className="search-movie-result-page-wrapper page-wrapper">
        <ResultHeader
          isLoading={isLoading}
          searchTerm={extractedParams.search_term}
          searchMatchTotal={searchMatchTotal}
          resultFromIndex={resultFromIndex}
          resultToIndex={resultToIndex}
        />
        <SearchResult searchMovieResult={searchMovieResult} />
        <PageIndex
          totalMovieResultPage={totalMovieResultPage}
          currentMovieResultPage={currentMovieResultPage}
          resultLength={searchMovieResult.length}
        />
      </div>
    );
  }

  currentMovieResultPage;
}
SearchMovieResultPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchMovieResult: PropTypes.array.isRequired,
  resultToIndex: PropTypes.number.isRequired,
  currentSearchTerm: PropTypes.string.isRequired,
  resultFromIndex: PropTypes.number.isRequired,
  searchMatchTotal: PropTypes.number.isRequired,
  totalMovieResultPage: PropTypes.number.isRequired,
  currentMovieResultPage: PropTypes.number.isRequired,

  fetchSearchMovie: PropTypes.func.isRequired
};

const stateToProps = state => ({
  isLoading: searchSelector.getSearchIsLoading(state),
  searchMatchTotal: searchSelector.getSearchMatchTotal(state),
  resultToIndex: searchSelector.getResultToIndex(state),
  resultFromIndex: searchSelector.getResultFromIndex(state),
  currentSearchTerm: searchSelector.getCurrentSearchTerm(state),
  totalMovieResultPage: searchSelector.getTotalMovieResultPages(state),
  currentMovieResultPage: searchSelector.getCurrentMovieResultPage(state),
  searchMovieResult: searchSelector.getSearchMovieResult(state)
});

const dispatchToProps = dispatch => ({
  fetchSearchMovie: queryFilters => {
    dispatch(searchAction.fetchSearchMovie(queryFilters));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(SearchMovieResultPage);
