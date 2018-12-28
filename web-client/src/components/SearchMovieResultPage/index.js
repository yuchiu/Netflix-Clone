import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { movieAction } from "@/actions";
import { movieSelector } from "@/selectors";
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
      searchMovieResult
    } = this.props;
    return (
      <div className="search-movie-result-page-wrapper page-wrapper">
        {isLoading && <div>loading search</div>}
        Search for {searchTerm}, found {searchMovieResult.length} results
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

  fetchSearchMovie: PropTypes.func.isRequired
};

const stateToProps = state => ({
  isLoading: movieSelector.getMovieIsLoading(state),
  searchMovieResult: movieSelector.getSearchMovieResult(state)
});

const dispatchToProps = dispatch => ({
  fetchSearchMovie: queryFilters => {
    dispatch(movieAction.fetchSearchMovie(queryFilters));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(SearchMovieResultPage);
