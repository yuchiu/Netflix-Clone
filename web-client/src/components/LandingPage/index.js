import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { movieAction } from "../../actions";
import { movieSelector } from "../../selectors";
import MovieCollection from "./MovieCollection";

class LandingPage extends React.Component {
  componentDidMount() {
    const { fetchMovieCollection } = this.props;
    fetchMovieCollection("trending");
    fetchMovieCollection("popular");
    fetchMovieCollection("rating");
  }

  render() {
    const {
      trendingCollectionList,
      popularCollectionList,
      topRatingCollectionList
    } = this.props;
    return (
      <div className="landing-page">
        <MovieCollection
          movieCollectionList={trendingCollectionList}
          collectionName="Trending"
        />
        <MovieCollection
          movieCollectionList={popularCollectionList}
          collectionName="Popular"
        />
        <MovieCollection
          movieCollectionList={topRatingCollectionList}
          collectionName="Top Rating"
        />
      </div>
    );
  }
}

LandingPage.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  trendingCollectionList: PropTypes.array.isRequired,
  popularCollectionList: PropTypes.array.isRequired,
  topRatingCollectionList: PropTypes.array.isRequired,

  fetchMovie: PropTypes.func.isRequired,
  fetchMovieCollection: PropTypes.func.isRequired
};

const stateToProps = state => ({
  selectedMovie: movieSelector.getSelectedMovie(state),
  isLoading: movieSelector.getMovieIsLoading(state),
  trendingCollectionList: movieSelector.getTrendingCollectionList(state),
  popularCollectionList: movieSelector.getPopularCollectionList(state),
  topRatingCollectionList: movieSelector.getTopRatingCollectionList(state)
});

const dispatchToProps = dispatch => ({
  fetchMovie: movieId => {
    dispatch(movieAction.fetchMovie(movieId));
  },
  fetchMovieCollection: collectionName => {
    dispatch(movieAction.fetchMovieCollection(collectionName));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(LandingPage);
