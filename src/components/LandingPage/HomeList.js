import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { MovieList, ListHeader } from "./presentations";
import { movieListAction, movieAction } from "@/actions";

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
    const { nowPlaying, upcoming, topRated, popular } = this.props;
    return (
      <div>
        <ListHeader header="Up Coming" />
        <MovieList movieList={upcoming} />
        <ListHeader header="Popular" />
        <MovieList movieList={popular} />
        <ListHeader header="Top Rated" />
        <MovieList movieList={topRated} />
        <ListHeader header="Now Playing" />
        <MovieList movieList={nowPlaying} />
      </div>
    );
  }
}
HomeList.propTypes = {
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
    dispatch(movieListAction.fetchUpcoming());
  },
  fetchPopular: () => {
    dispatch(movieListAction.fetchPopular());
  },
  fetchTopRated: () => {
    dispatch(movieListAction.fetchTopRated());
  },
  fetchNowPlaying: () => {
    dispatch(movieListAction.fetchNowPlaying());
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(HomeList);
