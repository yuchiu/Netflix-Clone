import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchAction } from "@/actions";
import { searchSelector } from "@/selectors";
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
      match: {
        params: { searchTerm }
      }
    } = this.props;
    fetchSearchMovie({
      searchTerm
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
      searchMovieResult
    } = this.props;
    return (
      <div className="search-movie-result-page-wrapper page-wrapper">
        {isLoading && <div>loading search</div>}
        Search for {searchTerm}, found {searchMatchTotal} results.
        {!isLoading &&
          searchMovieResult.map((movie, i) => (
            <div key={`search-result-id-${i}`}>
              <div>{movie.data.title}</div>
              <div>{movie.data.description}</div>
              <br />
            </div>
          ))}
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

  fetchSearchMovie: PropTypes.func.isRequired
};

const stateToProps = state => ({
  isLoading: searchSelector.getSearchIsLoading(state),
  searchMatchTotal: searchSelector.getSearchMatchTotal(state),
  currentMovieResultIndex: searchSelector.getCurrentMovieResultIndex(state),
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
