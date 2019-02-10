import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";
import { userAction } from "@/actions";
import { movieSelector, userSelector } from "@/selectors";

class BookmarkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hint: ""
    };
  }

  handleAddToBookmark = movie => {
    const { createMovieBookmark, isUserAuthenticated } = this.props;
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
      if (isUserAuthenticated) {
        createMovieBookmark(movieData);
      } else {
        this.setState({ hint: "Please sign in to bookmark movies" });
      }
    }
  };

  handleRemoveBookmark = bookmarkId => {
    const { removeMovieBookmark } = this.props;
    removeMovieBookmark(bookmarkId);
  };

  render() {
    const { hint } = this.state;
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
            <span className={`bookmark-btn__hint`}>{hint} </span>
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
  selectedMovieBookmarkId: movieSelector.getSelectedMovieBookmarkId(state),
  isUserAuthenticated: userSelector.getIsUserAuthenticated(state)
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
