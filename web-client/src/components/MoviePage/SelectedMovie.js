import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./SelectedMovie.scss";
import { movieSelector } from "@/selectors";
import { BookmarkButton } from "@/components/common";

class SelectedMovie extends React.Component {
  render() {
    const { movie, selectedMovieBookmarkId } = this.props;
    return (
      <div className="selected-movie-wrapper">
        <div className="selected-movie-top">
          <div className="selected-movie-top__title">{movie.data.title}</div>
          <BookmarkButton
            cssClass="selected-movie-top__bookmark-btn"
            selectedMovieBookmarkId={selectedMovieBookmarkId}
            movie={movie}
            removeBookmarkText=" Remove Bookmark"
            addBookmarkText=" Add To Bookmark"
          />
        </div>
        <div className="movie-img-wrapper">
          <img
            className="movie-img-wrapper__poster"
            src={movie.data.poster}
            alt="image not avaliable"
          />
          <img
            className="movie-img-wrapper__trailer-img"
            src={movie.data.trailer_img}
            alt="image not avaliable"
          />
        </div>

        <div className="movie-details">
          <div className="movie-details__item movie-details__item movie-details__desc">
            {movie.data.description}
          </div>
          <div className="movie-details__item movie-details__release-date">
            <b>Released Date</b>: {movie.data.release_date}
          </div>
          <div className="movie-details__item movie-details__duration">
            <b>Duration</b>: {movie.data.duration} minutes
          </div>
          <div className="movie-details__item movie-details__imdb-rating">
            <b>Rating</b>: {movie.data.imdb_ratingValue}
          </div>
          <div className="movie-details__item movie-details__imdb-count">
            <b>Rating Count</b>: {movie.data.imdb_ratingCount}
          </div>
          <div className="movie-details__item movie-details__imdb-href">
            <b>IMDB</b>:{" "}
            <a
              href={movie.data.url}
              className="movie-details__imdb-href__link"
              target="blank"
            >
              IMDB link
            </a>
          </div>
          <div className="movie-details__item movie-details__storyline">
            <b>Storyline</b>: {movie.data.storyline}
          </div>
        </div>
      </div>
    );
  }
}

SelectedMovie.propTypes = {
  movie: PropTypes.object.isRequired
};

const stateToProps = state => ({
  selectedMovieBookmarkId: movieSelector.getSelectedMovieBookmarkId(state)
});

export default connect(
  stateToProps,
  null
)(SelectedMovie);
