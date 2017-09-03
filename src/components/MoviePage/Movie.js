import React from 'react';

class Movie extends React.Component {

  handleClick() {
    console.log(this
      .props
      .theMovie);
  }
  render() {

    let theMovie = this
    .props
    .movieData
    .slice(0, 1);
    theMovie = theMovie[0]
  
    return (

      <div id="moviePage-container">
      <a href={`http://image.tmdb.org/t/p/w500//${theMovie.theMovie.poster_path}`}>
        <img src={`http://image.tmdb.org/t/p/w500//${theMovie.theMovie.poster_path}`}/>
      </a>
      <b>
        {theMovie.theMovie.title}
        </b>
        <p>
          {theMovie.theMovie.overview}
        </p>
      </div>
    )
  }

}

export default Movie;
