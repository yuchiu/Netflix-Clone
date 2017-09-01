import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=e5693481ef000bfdd855a0f21ad39631'

let actions = {

  fetchSearch: (searchText) => {

    return (dispatch) => {
      axios.get(`${ROOT_URL}/search/movie?${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then((response)=>{
          dispatch({type: "FETCH_RECEIVED", movies: response})
      })
      .catch((err)=>{
          dispatch({type:"FETCH_ERROR", movies:err})
      })
    }//return
  }//fetchSearch

}//actions

export default actions;