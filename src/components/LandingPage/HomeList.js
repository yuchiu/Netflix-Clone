import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { MovieList, ListHeader } from "./presentations";
import { movieListActions, movieActions } from "../../actions";

class HomeList extends React.Component {
  componentDidMount() {
    const {
      fetchNowPlaying,
      fetchPopular,
      fetchTopRated,
      fetchUpcoming
    } = this.props;
    fetchUpcoming();
    fetchPopular();
    fetchTopRated();
    fetchNowPlaying();
  }

  render() {
    const {
      nowPlaying,
      upcoming,
      topRated,
      popular,
      fetchTheMovie,
      fetchCast
    } = this.props;
    return (
      <div>
        <ListHeader header="Up Coming" />
        <MovieList
          movieList={upcoming}
          fetchTheMovie={fetchTheMovie}
          fetchCast={fetchCast}
        />
        <ListHeader header="Popular" />
        <MovieList
          movieList={popular}
          fetchTheMovie={fetchTheMovie}
          fetchCast={fetchCast}
        />
        <ListHeader header="Top Rated" />
        <MovieList
          movieList={topRated}
          fetchTheMovie={fetchTheMovie}
          fetchCast={fetchCast}
        />
        <ListHeader header="Now Playing" />
        <MovieList
          movieList={nowPlaying}
          fetchTheMovie={fetchTheMovie}
          fetchCast={fetchCast}
        />
      </div>
    );
  }
}
HomeList.propTypes = {
  fetchTheMovie: Proptypes.func,
  fetchCast: Proptypes.func,
  fetchUpcoming: Proptypes.func,
  fetchPopular: Proptypes.func,
  fetchTopRated: Proptypes.func,
  fetchNowPlaying: Proptypes.func,
  nowPlaying: Proptypes.array,
  upcoming: Proptypes.array,
  topRated: Proptypes.array,
  popular: Proptypes.array
};

const stateToProps = state => ({
  upcoming: state.hompageListsReducer.upcoming,
  topRated: state.hompageListsReducer.topRated,
  popular: state.hompageListsReducer.popular,
  nowPlaying: state.hompageListsReducer.nowPlaying
});

const dispatchToProps = dispatch => ({
  fetchUpcoming: () => {
    dispatch(movieListActions.fetchUpcoming());
  },
  fetchPopular: () => {
    dispatch(movieListActions.fetchPopular());
  },
  fetchTopRated: () => {
    dispatch(movieListActions.fetchTopRated());
  },
  fetchNowPlaying: () => {
    dispatch(movieListActions.fetchNowPlaying());
  },
  fetchTheMovie: movieId => {
    dispatch(movieActions.fetchTheMovie(movieId));
  },
  fetchCast: movieId => {
    dispatch(movieActions.fetchCast(movieId));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(HomeList);
