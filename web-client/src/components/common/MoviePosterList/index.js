import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "./index.scss";

class SearchResult extends React.Component {
  routeToMoviePage = movieId => {
    const { history } = this.props;
    history.push(`/movie/${movieId}`);
  };

  renderList = () => {
    const { movieList, maxDisplayLength, children } = this.props;
    const list = [];
    if (movieList.length) {
      // render entire array if there are not maximum number defined by parent component
      const displayLength = maxDisplayLength || movieList.length;
      for (let i = 0; i < displayLength; i++) {
        const movie = movieList[i];
        if (movie) {
          list.push(
            <div className="movie-list-item" key={`movie-poster-id-${i}`}>
              <div className="movie-list-item__img-wrapper">
                <div
                  className="cursor-pointer movie-list-item__img-wrapper__rating-wrapper"
                  onClick={this.routeToMoviePage.bind(
                    this,
                    movie.movieId ? movie.movieId : movie.id
                  )}
                >
                  <div className="cursor-pointer movie-list-item__img-wrapper__rating-wrapper__text">
                    {movie.data.imdb_ratingValue}
                  </div>
                </div>
                <img
                  className="cursor-pointer movie-list-item__img-wrapper__img"
                  alt="image not available"
                  onClick={this.routeToMoviePage.bind(
                    this,
                    movie.movieId ? movie.movieId : movie.id
                  )}
                  src={movie.data.poster}
                />
              </div>
              <div
                className="cursor-pointer movie-list-item__title"
                onClick={this.routeToMoviePage.bind(
                  this,
                  movie.movieId ? movie.movieId : movie.id
                )}
              >
                {movie.data.title}
              </div>
              {/* additional children component will be rendered beneath title */}
              {children}
            </div>
          );
        }
      }
    }
    return list;
  };

  render() {
    return <div className="movie-poster-list">{this.renderList()}</div>;
  }
}

SearchResult.propTypes = {
  movieList: PropTypes.array.isRequired,
  maxDisplayLength: PropTypes.number
};

export default withRouter(SearchResult);
