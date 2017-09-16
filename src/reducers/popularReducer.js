const popularReducer = function (popular = [], action) {
    
      switch (action.type) {
        case 'FETCH_POPULAR':
          return popular = action.payload.data.results
    
        case 'FETCH_ERROR':
          return console.log(action.payload);
    
        default:
          return popular;
      }
    }
    export default popularReducer;