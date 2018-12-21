import actionTypes from "@/actionTypes";

export default {
  /**
   * Local
   */
  clearAllError: () => dispatch => {
    dispatch({
      type: actionTypes.ERROR_ALL_CLEAR
    });
  },
  createError: text => dispatch => {
    dispatch({
      type: actionTypes.ERROR_CREATE,
      payload: text
    });
  }
};
