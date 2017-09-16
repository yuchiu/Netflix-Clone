const topRatedReducer = function (topRated = [], action) {
    
      switch (action.type) {
        case 'FETCH_TOPRATED':
          return topRated = action.payload.data.results
    
        case 'FETCH_ERROR':
          return console.log(action.payload);
    
        default:
          return topRated;
      }
    }
    export default topRatedReducer;