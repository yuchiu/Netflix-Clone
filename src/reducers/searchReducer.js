

const searchReducer = function (search =[], action) {
    
      switch (action.type) {
        case 'FETCH_SEARCH':
          return search = action.payload.data.results;
    
        case 'FETCH_ERROR':
          return console.log(action.err);
    
        default:
          return search;
      }
    }
    export default searchReducer;