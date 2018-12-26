import React from "react";
import PropTypes from "prop-types";

const SelectedMovie = ({ movie }) => (
  <div className="movie-page-title">
    <div>{movie.id}</div>
    <div>{movie.data.title}</div>
    <div>{movie.data.description}</div>
    <div>{movie.data.url}</div>
    <div>{movie.data.poster}</div>
    <div>{movie.data.release_date}</div>
    <div>{movie.data.imdb_ratingCount}</div>
    <div>{movie.data.release_date_unix_time}</div>
    <div>{movie.data.taglines}</div>
    <div>{movie.data.imdb_ratingValue}</div>
    <div>{movie.data.storyline}</div>
    <div>
      {movie.data.stars.map((star, i) => (
        <div>{star}</div>
      ))}
    </div>
    <div>{movie.data.genre}</div>
    <div>{movie.data.trailer_img}</div>
    <div>{movie.data.duration}</div>
  </div>
);

SelectedMovie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default SelectedMovie;
