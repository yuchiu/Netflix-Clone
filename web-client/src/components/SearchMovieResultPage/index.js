import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
      currentParam: ""
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  componentDidUpdate() {
    const {
      match: {
        params: { searchTerm }
      }
    } = this.props;
    const { currentParam } = this.state;

    /* fetch search if param has changed */
    if (currentParam !== searchTerm) this.handleSearch();
  }

  componentWillUnmount() {
    this.setState({ currentParam: "" });
  }

  handleSearch = () => {
    const {
      fetchSearchMovie,
      currentMovieResultIndex,
      match: {
        params: { searchTerm }
      }
    } = this.props;
    fetchSearchMovie({
      searchTerm,
      currentMovieResultIndex
    });
    this.setState({ currentParam: searchTerm });
  };

  render() {
    const {
      match: {
        params: { searchTerm }
      },
      isLoading,
      searchMatchTotal,
      currentMovieResultIndex,
      searchMovieResult,
      totalMovieResultPage,
      currentMovieResultPage
    } = this.props;
    return (
      <div className="search-movie-result-page-wrapper page-wrapper">
        <ResultHeader
          isLoading={isLoading}
          searchTerm={searchTerm}
          searchMatchTotal={searchMatchTotal}
          currentMovieResultIndex={currentMovieResultIndex}
        />
        <SearchResult searchMovieResult={searchMovieResult} />
        <PageIndex
          totalMovieResultPage={totalMovieResultPage}
          currentMovieResultPage={currentMovieResultPage}
        />
      </div>
    );
  }
}
SearchMovieResultPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchMovieResult: PropTypes.array.isRequired,
  currentMovieResultIndex: PropTypes.number.isRequired,
  searchMatchTotal: PropTypes.number.isRequired,
  totalMovieResultPage: PropTypes.number.isRequired,
  currentMovieResultPage: PropTypes.number.isRequired,

  fetchSearchMovie: PropTypes.func.isRequired
};

const stateToProps = state => ({
  isLoading: searchSelector.getSearchIsLoading(state),
  searchMatchTotal: searchSelector.getSearchMatchTotal(state),
  currentMovieResultIndex: searchSelector.getCurrentMovieResultIndex(state),
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
