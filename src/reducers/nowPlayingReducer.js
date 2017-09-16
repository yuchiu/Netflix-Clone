const nowPlayingReducer = function (nowPlaying = [], action) {
    
      switch (action.type) {
        case 'FETCH_NOWPLAYING':
          return nowPlaying = action.payload.data.results
    
        case 'FETCH_ERROR':
          return console.log(action.payload);
    
        default:
          return nowPlaying;
      }
    }
    export default nowPlayingReducer;