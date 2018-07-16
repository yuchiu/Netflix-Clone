import constants from "../constants";

const hompageListsReducers = {
  nowPlayingReducer: (nowPlaying = [], action) => {
    switch (action.type) {
      case constants.FETCH_NOWPLAYING:
        return (nowPlaying = action.payload.data.results);

      case constants.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return nowPlaying;
    }
  },
  popularReducer: (popular = [], action) => {
    switch (action.type) {
      case constants.FETCH_POPULAR:
        return (popular = action.payload.data.results);

      case constants.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return popular;
    }
  },
  topRatedReducer: (topRated = [], action) => {
    switch (action.type) {
      case constants.FETCH_TOPRATED:
        return (topRated = action.payload.data.results);

      case constants.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return topRated;
    }
  },
  upcomingReducer: (upcoming = [], action) => {
    switch (action.type) {
      case constants.FETCH_UPCOMING:
        return (upcoming = action.payload.data.results);

      case constants.FETCH_ERROR:
        return console.log(action.payload);

      default:
        return upcoming;
    }
  }
};

export default hompageListsReducers;
