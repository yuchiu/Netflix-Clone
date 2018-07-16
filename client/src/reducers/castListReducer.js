import constants from "../constants";

const castListReducer = function(castList = [], action) {
  switch (action.type) {
    case constants.FETCH_CASTLIST:
      return (castList = action.payload.data.cast);

    case constants.FETCH_ERROR:
      return console.log(action.payload);

    default:
      return castList;
  }
};
export default castListReducer;
