const castListReducer = function (castList = [], action) {

  switch (action.type) {
    case 'FETCH_CASTLIST':
      return castList = action.payload.data.cast;

    case 'FETCH_ERROR':
      return console.log(action.err);

    default:
      return castList;
  }
}
export default castListReducer;