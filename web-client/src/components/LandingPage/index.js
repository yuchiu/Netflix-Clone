import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { movieAction } from "../../actions";
import { movieSelector } from "../../selectors";

class LandingPage extends React.Component {
  componentDidMount() {
    const { fetcheMovieCollection } = this.props;
    fetcheMovieCollection("trending");
    fetcheMovieCollection("popular");
    fetcheMovieCollection("rating");
  }

  render() {
    const {
      trendingCollectionList,
      popularCollectionList,
      ratingCollectionList
    } = this.props;
    return (
      <div className="landing-page">
        Netflix Clone
        <br />
        <h1>Trending</h1>
        {trendingCollectionList.map((movie, i) => (
          <div key={`collection-trending-${i}`}>
            <h4>{movie.data.title}</h4>
            <div>{movie.data.taglines}</div>
          </div>
        ))}
        <br />
        <h1>Popular</h1>
        {popularCollectionList.map((movie, i) => (
          <div key={`collection-popular-${i}`}>
            <h4>{movie.data.title}</h4>
            <div>{movie.data.taglines}</div>
          </div>
        ))}
        <br />
        <h1>Rating</h1>
        {ratingCollectionList.map((movie, i) => (
          <div key={`collection-rating-${i}`}>
            <h4>{movie.data.title}</h4>
            <div>{movie.data.taglines}</div>
          </div>
        ))}
      </div>
    );
  }
}

LandingPage.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  trendingCollectionList: PropTypes.array.isRequired,
  popularCollectionList: PropTypes.array.isRequired,
  ratingCollectionList: PropTypes.array.isRequired,

  fetchMovie: PropTypes.func.isRequired,
  fetcheMovieCollection: PropTypes.func.isRequired
};

const stateToProps = state => ({
  selectedMovie: movieSelector.getSelectedMovie(state),
  isLoading: movieSelector.getMovieIsLoading(state),
  trendingCollectionList: movieSelector.getTrendingCollectionList(state),
  popularCollectionList: movieSelector.getPopularCollectionList(state),
  ratingCollectionList: movieSelector.getRatingCollectionList(state)
});

const dispatchToProps = dispatch => ({
  fetchMovie: movieId => {
    dispatch(movieAction.fetchMovie(movieId));
  },
  fetcheMovieCollection: collectionName => {
    dispatch(movieAction.fetcheMovieCollection(collectionName));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(LandingPage);
