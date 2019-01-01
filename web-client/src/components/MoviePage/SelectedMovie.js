import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { userAction } from "@/actions";

class SelectedMovie extends React.Component {
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

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-page-title">
        <div>
          <img src={movie.data.poster} alt="movie-poster" />
        </div>
        <div>
          <img src={movie.data.trailer_img} alt="movie-poster" />
        </div>
        <br />
        <div
          className="cursor-pointer"
          onClick={this.handleAddToBookmark.bind(this, movie)}
        >
          Add To Bookmark
        </div>
        <br />
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
        {movie.data.stars && (
          <div>
            {movie.data.stars.map((star, i) => (
              <div key={`movie-star-${i}`}>{star}</div>
            ))}
          </div>
        )}
        <div>{movie.data.genre}</div>
        <div>{movie.data.trailer_img}</div>
        <div>{movie.data.duration}</div>
      </div>
    );
  }
}

SelectedMovie.propTypes = {
  movie: PropTypes.object.isRequired
};

const dispatchToProps = dispatch => ({
  createMovieBookmark: movieData => {
    dispatch(userAction.createMovieBookmark(movieData));
  }
});

export default connect(
  null,
  dispatchToProps
)(SelectedMovie);
