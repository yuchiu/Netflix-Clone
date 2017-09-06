import React from 'react';

class Movie extends React.Component {

  render() {

    let theMovie = this.props.theMovie
    return (

      <div id="moviePage-container">
        <div id="poster-container">
          <img src={`http://image.tmdb.org/t/p/w500//${theMovie.poster_path}`}/>
        </div>

        <div id="desc-container">
          <h4>
            <b>
              {theMovie.title}
            </b>
          </h4>
          <p>
            <b>
              rating:
            </b>
            {theMovie.vote_average}
          </p>
          <p>
            <b>
              runtime:
            </b>
            {theMovie.runtime}
            minutes
          </p>
          <p>
            <b>
              released date:
            </b>
            {theMovie.release_date}
          </p>
          <p>
            <b>
              overview:
            </b>
            {theMovie.overview}
          </p>

          cast:
          <div id="cast-container">
          <div className="cast-item">
            <img src="http://via.placeholder.com/150x250"/>
          </div>
            <div className="cast-item">
              <img src="http://via.placeholder.com/150x250"/>
            </div>
            <div className="cast-item">
              <img src="http://via.placeholder.com/150x250"/>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default Movie;