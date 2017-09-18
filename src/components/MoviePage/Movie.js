import React from 'react';
import Cast from './Cast';

class Movie extends React.Component {

  handleClick() {
    console.log(this.props.castList)
  }
  render() {
    let theMovie = this.props.theMovie;
    let genres = this.props.theMovie.genres;
    let casts = this
      .props
      .castList
      .slice(0, 4)
    return (

      <div id="moviePage-container">
        <div id="poster-container">
          <img id="poster" src={`http://image.tmdb.org/t/p/w500//${theMovie.poster_path}`}/>
        </div>
        <div id="desc-container">
          <h4 className ="desc-item">
            <div className ="movie-title">
              {theMovie.title}
            </div>
          </h4>
          <p className="desc-item">
            <b className ="desc-title">Rating:</b>
            {theMovie.vote_average}
          </p>
          <p className="desc-item">
            <b className ="desc-title">Runtime:</b>
            {theMovie.runtime}
            minutes
          </p>
          <p className="desc-item">
            <b className ="desc-title">Released date:</b>
            {theMovie.release_date}
          </p>
          <p id="overview" className="desc-item">
            <b className ="desc-title">Overview:</b>
            {theMovie.overview}
          </p>
            <b className ="desc-title">Cast:</b>
          <ul id="cast-container">
            {casts.map((person, i) => {
              return <Cast key={person.id} person={person}/>
            })}
          </ul>
        </div>
      </div>
    )
  }

}

export default Movie;
