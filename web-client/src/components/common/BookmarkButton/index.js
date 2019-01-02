import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";
import { userAction } from "@/actions";
import { movieSelector } from "@/selectors";

class BookmarkButton extends React.Component {
  handleAddToBookmark = movie => {
    const { createMovieBookmark } = this.props;
    if (movie.data) {
      const movieData = {
        movieId: movie.id,
        movieDescription: movie.data.description,
        moviePoster: movie.data.poster,
        movieTrailerImg: movie.data.trailer_img,
        movieTitle: movie.data.title,
        movieRating: movie.data.imdb_ratingValue,
        movieRatingCount: movie.data.imdb_ratingCount
      };
      createMovieBookmark(movieData);
    }
  };

  handleRemoveBookmark = bookmarkId => {
    const { removeMovieBookmark } = this.props;
    removeMovieBookmark(bookmarkId);
  };

  render() {
    const {
      cssClass,
      movie,
      selectedMovieBookmarkId,
      removeBookmarkText,
      addBookmarkText
    } = this.props;
    return (
      <React.Fragment>
        {selectedMovieBookmarkId ? (
          <div
            className={`cursor-pointer bookmark-btn ${cssClass}`}
            onClick={this.handleRemoveBookmark.bind(
              this,
              selectedMovieBookmarkId
            )}
          >
            <i className="far fa-trash-alt bookmark-btn__icon" />
            {removeBookmarkText}
          </div>
        ) : (
          <div
            className={`cursor-pointer bookmark-btn ${cssClass}`}
            onClick={this.handleAddToBookmark.bind(this, movie)}
          >
            <i className="far fa-plus-square bookmark-btn__icon" />
            {addBookmarkText}
          </div>
        )}
      </React.Fragment>
    );
  }
}

BookmarkButton.propTypes = {
  movie: PropTypes.object.isRequired
};

const stateToProps = state => ({
  selectedMovieBookmarkId: movieSelector.getSelectedMovieBookmarkId(state)
});

const dispatchToProps = dispatch => ({
  createMovieBookmark: movieData => {
    dispatch(userAction.createMovieBookmark(movieData));
  },
  removeMovieBookmark: bookmarkId => {
    dispatch(userAction.removeMovieBookmark(bookmarkId));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(BookmarkButton);
