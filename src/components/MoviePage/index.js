import React from 'react';
import Movie from './Movie'

class MoviePage extends React.Component {

  render() {
    return (
        <div className = "MoviePage-container">
            <Movie movieData= {this.props.movieData}/>
        </div>
    )
  }

}

export default MoviePage;