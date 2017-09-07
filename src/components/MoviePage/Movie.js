import React from 'react';
import Cast from './Cast'
import Genre from './Genre'

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
          <img src={`http://image.tmdb.org/t/p/w500//${theMovie.poster_path}`}/>
        </div>
        <div id="desc-container">
          <h4>
            <b>
              {theMovie.title}
            </b>
          </h4>
          <p>
            <b>rating:</b>
            {theMovie.vote_average}
          </p>
          <p>
            <b>runtime:</b>
            {theMovie.runtime}
            minutes
          </p>
          <p>
            <b>released date:</b>
            {theMovie.release_date}
          </p>
          <p id="overview">
            <b>overview:</b>
            {theMovie.overview}
          </p>
          cast:
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
