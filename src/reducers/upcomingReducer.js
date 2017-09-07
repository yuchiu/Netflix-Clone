const upcomingReducer = function (upcoming = [], action) {

  switch (action.type) {
    case 'FETCH_UPCOMING':
      return upcoming = action.payload.data.results

    case 'FETCH_ERROR':
      return console.log(action.payload);

    default:
      return upcoming;
  }
}
export default upcomingReducer;