

const searchReducer = function (search = [], action) {

  switch (action.type) {
    case 'FETCH_SEARCH':
      return [
        {
          movies: action.movies.data.results, //add new  info

          theMovie : [],
        },
        ...search //append
      ]
    case 'FETCH_MOVIE':
      return [
        {
          movies : [],
          theMovie: action.theMovie.data //add new  info

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