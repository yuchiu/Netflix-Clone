import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const handleClick = (movie, fetchTheMovie, fetchCast) => {
  fetchTheMovie(movie.id);
  fetchCast(movie.id);
};

const renderTitle = title => {
  if (title.length < 20) {
    return <h5 className="search-tile-title">{title}</h5>;
  }
  if (title.length < 35) {
    return <h5 className="search-tile-title long-title">{title}</h5>;
  }
  return <h5 className="search-tile-title longer-title">{title}</h5>;
};

const renderDesc = desc => {
  if (desc.length > 150) {
    // eslint-disable-next-line no-param-reassign
    desc = desc.substring(0, 135);
    return <p className="tile-desc">{desc} ... read more</p>;
  }
  return <p className="tile-desc">{desc}</p>;
};

const renderPic = movie => {
  if (movie.backdrop_path !== null) {
    return (
      <img
        className="tile-img"
        src={`http://image.tmdb.org/t/p/w500//${movie.backdrop_path}`}
      />
    );
  }
  if (movie.poster_path !== null) {
    return (
      <img
        className="tile-img "
        src={`http://image.tmdb.org/t/p/w500//${movie.poster_path}`}
      />
    );
  }
  return <img className="tile-img" src="http://via.placeholder.com/280x160" />;
};

const ListItem = ({ movie, fetchTheMovie, fetchCast }) => (
  <Link
    className="tile"
    to="/movie"
    onClick={handleClick(movie, fetchTheMovie, fetchCast)}
  >
    <div className="tile-img">{renderPic(movie)}</div>
    <div className=" photo-overlay">
      <div className="tile-text-container">
        <div className="playbtn-container">
          <button className="playBtn ">▶</button>
        </div>
        <div>{renderTitle(movie.title)}</div>
        <div>{renderDesc(movie.overview)}</div>
      </div>
    </div>
  </Link>
);

ListItem.propTypes = {
  fetchTheMovie: Proptypes.func,
  fetchCast: Proptypes.func,
  movie: Proptypes.object
};
export default ListItem;
