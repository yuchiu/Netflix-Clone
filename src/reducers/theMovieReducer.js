const theMovieReducer = function (theMovie = [], action) {
    
      switch (action.type) {
        case 'FETCH_THEMOVIE':
          return theMovie = action.payload.data
    
        case 'FETCH_ERROR':
          return console.log(action.payload);
    
        default:
          return theMovie;
      }
    }
    export default theMovieReducer;