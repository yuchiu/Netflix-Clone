import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";

import extractQueryString from "@/utils/extractQueryString";
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
    const { location } = this.props;
    /* fetch search if param has changed */
    const extractedParams = extractQueryString(location.search);
    if (!isEqual(currentParams, extractedParams)) {
      this.handleSearch();
    }
  }

  componentWillUnmount() {
    this.setState({ currentParams: {} });
  }

  handleSearch = () => {
    const { fetchSearchMovie, location } = this.props;
    const extractedParams = extractQueryString(location.search);
    fetchSearchMovie({
      searchTerm: extractedParams.search_term,
      nextPageFromIndex: parseInt(extractedParams.from_index, 10)
    });
    this.setState({ currentParams: extractedParams });
  };

  render() {
    const {
      isLoading,
      location,
      history,
      searchMatchTotal,
      resultFromIndex,
      resultToIndex,
      searchMovieResult,
      totalMovieResultPage,
      currentMovieResultPage
    } = this.props;
    const extractedParams = extractQueryString(location.search);
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
          extractedParams={extractedParams}
          history={history}
        />
      </div>
    );
  }
}
SearchMovieResultPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchMovieResult: PropTypes.array.isRequired,
  resultToIndex: PropTypes.number.isRequired,
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
