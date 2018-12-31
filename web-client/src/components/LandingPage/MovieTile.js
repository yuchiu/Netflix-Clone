import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "./MovieTile.scss";

class MovieTile extends React.Component {
  routeToMoviePage = movieId => {
    const { history } = this.props;
    history.push(`/movie/${movieId}`);
  };

  render() {
    const { movie } = this.props;
    return (
      <div
        className="movie-tile cursor-pointer"
        style={{
          backgroundImage: `url(${
            movie.data.trailer_img ? movie.data.trailer_img : movie.data.poster
          })`
        }}
        onClick={this.routeToMoviePage.bind(this, movie.id)}
      >
        <h4 className="movie-tile__overlay movie-tile__overlay--title">
          {movie.data.title}
        </h4>
        <div className="movie-tile__overlay movie-tile__overlay--desc">
          {movie.data.taglines}
        </div>
      </div>
    );
  }
}

MovieTile.propTypes = {
  history: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};

export default withRouter(MovieTile);
