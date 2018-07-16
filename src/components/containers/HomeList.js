import React from "react";
import { connect } from "react-redux";
import {
  UpComingList,
  PopularList,
  TopRatedList,
  NowPlayingList
} from "../presentations/HomePage";
import { movieListActions } from "../../actions";

class HomeList extends React.Component {
  componentDidMount() {
    this.props.fetchUpcoming();
    this.props.fetchPopular();
    this.props.fetchTopRated();
    this.props.fetchNowPlaying();
  }

  render() {
    const { nowPlaying, upcoming, topRated, popular } = this.props;
    return (
      <div>
        <div className="list-title">
          <h3>Up Coming</h3>
        </div>
        <UpComingList upcoming={upcoming} />
        <div className="list-title">
          <h3>Popular</h3>
        </div>
        <PopularList popular={popular} />
        <div className="list-title">
          <h3>Top Rated</h3>
        </div>
        <TopRatedList topRated={topRated} />
        <div className="list-title">
          <h3>Now Playing</h3>
        </div>
        <NowPlayingList nowPlaying={nowPlaying} />
      </div>
    );
  }
}
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
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(HomeList);
