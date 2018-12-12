import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { movieAction } from "../../actions";
import { movieSelector } from "../../selectors";
import CollectionList from "./CollectionList";

class LandingPage extends React.Component {
  componentDidMount() {
    const { fetcheMovieCollection } = this.props;
    fetcheMovieCollection("trending");
    fetcheMovieCollection("popular");
    fetcheMovieCollection("rating");
  }

  render() {
    const { movieCollectionList } = this.props;
    console.log(movieCollectionList.trending);
    return (
      <div className="landing-page">
        Netflix Clone
        <br />
        Trending
        <CollectionList movieCollectionList={movieCollectionList} />
      </div>
    );
  }
}

LandingPage.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  movieCollectionList: PropTypes.object.isRequired,

  fetchMovie: PropTypes.func.isRequired,
  fetcheMovieCollection: PropTypes.func.isRequired
};

const stateToProps = state => ({
  selectedMovie: movieSelector.getSelectedMovie(state),
  movieCollectionList: movieSelector.getMovieCollectionList(state)
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
