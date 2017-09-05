

const searchReducer = function (search = [], action) {

  switch (action.type) {
    case 'FETCH_SEARCH':
      return [
        {
          upComing: [],
          theMovie : [],
          movies: action.movies.data.results, //add new  info
        },
        ...search //append
      ]
      case 'FETCH_MOVIE':
        return [
          {
            movies : [],
            upComing: [],
            theMovie: action.theMovie.data //add new  info
  
          },
          ...search //append
        ]
        case 'FETCH_UPCOMING':
          return [
            {
              movies : [],
              theMovie : [],
              upComing: action.upComing.data.results //add new  info
    
            },
            ...search //append
          ]


    case 'FETCH_ERROR':
      return console.log('errorrrrr');

    default:
      return search;
  }
}
export default searchReducer;