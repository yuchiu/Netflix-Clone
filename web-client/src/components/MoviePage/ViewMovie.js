import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Poster, Descriptions } from "./presentations";
import { movieAction } from "@/actions";

class ViewMovie extends React.Component {
  componentDidMount() {
    const {
      fetchTheMovie,
      fetchCast,
      match: {
        params: { movieId }
      }
    } = this.props;

    fetchTheMovie(movieId);
    fetchCast(movieId);
  }

  componentWillUnmount() {
    const { clearTheMovie } = this.props;
    clearTheMovie();
  }

  render() {
    const { castList, theMovie } = this.props;
    return (
      <div id="moviePage-container">
        <Poster
          posterPath={`http://image.tmdb.org/t/p/w500//${theMovie.poster_path}`}
        />
        <Descriptions theMovie={theMovie} castList={castList} />
      </div>
    );
  }
}

ViewMovie.propTypes = {
  theMovie: Proptypes.object,
  castList: Proptypes.array,
  fetchTheMovie: Proptypes.func,
  fetchCast: Proptypes.func
};

const stateToProps = state => ({
  theMovie: state.theMovieReducer.theMovie,
  castList: state.castListReducer.castList.slice(0, 4)
});

const dispatchToProps = dispatch => ({
  fetchTheMovie: movieId => {
    dispatch(movieAction.fetchTheMovie(movieId));
  },
  fetchCast: movieId => {
    dispatch(movieAction.fetchCast(movieId));
  },
  clearTheMovie: () => dispatch(movieAction.clearTheMovie())
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(ViewMovie)
);
