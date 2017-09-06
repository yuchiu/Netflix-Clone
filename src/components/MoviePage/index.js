import React from 'react';
import Movie from './Movie'

class MoviePage extends React.Component {

  render() {
    return (
        <div className = "MoviePage-container">
            <Movie actions={this.props.actions} theMovie={this.props.theMovie} />
        </div>
    )
  }

}

export default MoviePage;
