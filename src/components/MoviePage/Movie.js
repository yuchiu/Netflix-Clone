import React from 'react';

class Movie extends React.Component {

  handleClick() {
    console.log(this.props.theMovie);
  }
  render() {

    let theMovie = this.props.movieData

    return (

      <div id="moviePage-container">
        <a href={`http://image.tmdb.org/t/p/w500//${theMovie.theMovie.poster_path}`}>
          <img src={`http://image.tmdb.org/t/p/w500//${theMovie.theMovie.poster_path}`}/>
        </a>

        <h4>
          <b>
            {theMovie.theMovie.title}
          </b>
        </h4>
        <p>
          <b>
            rating:
          </b> {theMovie.theMovie.vote_average}
        </p>
        <p>
          <b>
            runtime:
          </b> {theMovie.theMovie.runtime}
          minutes
        </p>
        <p>
          <b>
            released date:
          </b> {theMovie.theMovie.release_date}
        </p>
        <p>
          <b>
            overview:
          </b> {theMovie.theMovie.overview}
        </p>
      </div>
    )
  }

}

export default Movie;
