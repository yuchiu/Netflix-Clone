import React from "react";
import Proptypes from "prop-types";
import Cast from "./Cast";

const Poster = ({ theMovie, castList }) => (
  <div id="desc-container">
    <h4 className="desc-item">
      <div className="movie-title">{theMovie.title}</div>
    </h4>
    <p className="desc-item">
      <b className="desc-title">Rating:</b>
      {theMovie.vote_average}
    </p>
    <p className="desc-item">
      <b className="desc-title">Runtime:</b>
      {theMovie.runtime}
      minutes
    </p>
    <p className="desc-item">
      <b className="desc-title">Released date:</b>
      {theMovie.release_date}
    </p>
    <p id="overview" className="desc-item">
      <b className="desc-title">Overview:</b>
      {theMovie.overview}
    </p>
    <b className="desc-title">Cast:</b>
    <ul id="cast-container">
      {castList.map(person => <Cast key={person.id} person={person} />)}
    </ul>
  </div>
);

Poster.propTypes = {
  theMovie: Proptypes.object,
  castList: Proptypes.array
};

export default Poster;
