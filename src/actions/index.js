import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=e5693481ef000bfdd855a0f21ad39631'

let actions = {

  fetchSearch: (searchText) => {
    if (searchText.length >= 1) {
      return (dispatch) => {
        axios
          .get(`${ROOT_URL}/search/movie?${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`)
          .then((response) => {
            dispatch({type: "FETCH_SEARCH", payload: response})
          })
          .catch((err) => {
            dispatch({type: "FETCH_ERROR", payload: err})
          }) //if
      } //return
    } else {
      return console.log('search input is empty, route back to home page')
    }
  }, //fetchSearch

  
  fetchUpcoming: () => {
    return (dispatch) => {
      axios
        .get(`${ROOT_URL}/movie/upcoming?${API_KEY}`)
        .then((response) => {
          dispatch({type: "FETCH_UPCOMING", payload: response})
        })
        .catch((err) => {
          dispatch({type: "FETCH_ERROR", payload: err})
        })
    } //return
  },//upcoming
  
  fetchTheMovie: (movieId) => {
    return (dispatch) => {
      axios
      .get(`${ROOT_URL}/movie/${movieId}?${API_KEY}&language=en-US`)
        .then((response) => {
          dispatch({type: "FETCH_THEMOVIE", payload: response})
        })
        .catch((err) => {
          dispatch({type: "FETCH_ERROR", payload: err})
        })
    } //return
  },//theMovie

  fetchCast: (movieId) => {
    return (dispatch) => {
      axios
      .get(`${ROOT_URL}/movie/${movieId}/credits?${API_KEY}`)
        .then((response) => {
          dispatch({type: "FETCH_CASTLIST", payload: response})
        })
        .catch((err) => {
          dispatch({type: "FETCH_ERROR", payload: err})
        })
    } //return
  },//fetchCast

} //actions

export default actions;