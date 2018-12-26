import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { movieAction } from "@/actions";
import { movieSelector } from "@/selectors";
import LoadingMovie from "./LoadingMovie";
import NotFoundMovie from "./NotFoundMovie";
import SelectedMovie from "./SelectedMovie";

class MoviePage extends React.Component {
  componentDidMount() {
    const {
      fetchMovie,
      match: {
        params: { movieId }
      }
    } = this.props;
    fetchMovie(movieId);
  }

  componentWillUnmount() {
    const { clearSelectedMovie } = this.props;
    clearSelectedMovie();
  }

  render() {
    const { selectedMovie, isLoading } = this.props;
    return (
      <div className="movie-page-wrapper page-wrapper">
        {/* 3 scenario: 1) loading movie, 2) movie not found, 3) display selected movie */}
        {isLoading && <LoadingMovie />}
        {!isLoading && (
          <React.Fragment>
            {Object.keys(selectedMovie).length ? (
              <SelectedMovie movie={selectedMovie} />
            ) : (
              <NotFoundMovie />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

MoviePage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  selectedMovie: PropTypes.object.isRequired,

  fetchMovie: PropTypes.func.isRequired
};

const stateToProps = state => ({
  isLoading: movieSelector.getMovieIsLoading(state),
  selectedMovie: movieSelector.getSelectedMovie(state)
});

const dispatchToProps = dispatch => ({
  fetchMovie: movieId => {
    dispatch(movieAction.fetchMovie(movieId));
  },
  clearSelectedMovie: () => dispatch(movieAction.clearSelectedMovie())
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(MoviePage)
);
