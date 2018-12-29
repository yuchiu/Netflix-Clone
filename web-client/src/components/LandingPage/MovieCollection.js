import React from "react";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import PropTypes from "prop-types";

import "./MovieCollection.scss";
import MovieTile from "./MovieTile";

class MovieCollection extends React.Component {
  state = {
    margin: 0,
    TOTAL_MARGIN: 8160,
    MOVIE_TILE_WIDTH: 340
  };

  handleLeftClick = e => {
    e.preventDefault();
    const { margin, MOVIE_TILE_WIDTH } = this.state;
    const { movieList } = this.refs;
    if (!margin) {
      return;
    }
    if (margin < MOVIE_TILE_WIDTH) {
      this.setState({
        margin: margin + MOVIE_TILE_WIDTH
      });
      // eslint-disable-next-line
      const el = findDOMNode(movieList);
      $(el).animate(
        {
          marginLeft: `+=${MOVIE_TILE_WIDTH}px`
        },
        "fast"
      );
    }
  };

  handleRightClick = e => {
    e.preventDefault();
    const { margin, MOVIE_TILE_WIDTH, TOTAL_MARGIN } = this.state;
    const { movieList } = this.refs;
    if (margin > -TOTAL_MARGIN) {
      this.setState({
        margin: margin - MOVIE_TILE_WIDTH
      });
      // eslint-disable-next-line
      const el = findDOMNode(movieList);
      $(el).animate(
        {
          marginLeft: `-=${MOVIE_TILE_WIDTH}px`
        },
        "fast"
      );
    }
  };

  render() {
    const { margin, TOTAL_MARGIN } = this.state;
    const { movieCollectionList, collectionName } = this.props;
    return (
      <React.Fragment>
        <h2 className="collection-title">{collectionName}</h2>
        <div className="collection-list" ref="movieList">
          <span
            onClick={this.handleLeftClick}
            className="collection-list__slider-btn collection-list__slider-btn--left"
            role="button"
          >
            {margin ? (
              <i
                className="fa fa-angle-left collection-list__slider-btn__icon"
                aria-hidden="true"
              />
            ) : (
              <i
                className="fa fa-angle-left collection-list__slider-btn__icon collection-list__slider-btn__icon--disable"
                aria-hidden="true"
              />
            )}
          </span>
          {movieCollectionList.map((movie, i) => (
            <MovieTile
              key={`collection-${collectionName}-${i}`}
              movie={movie}
            />
          ))}
          <span
            onClick={this.handleRightClick}
            className="collection-list__slider-btn collection-list__slider-btn--right"
            role="button"
          >
            {margin > -TOTAL_MARGIN ? (
              <i
                className="fa fa-angle-right collection-list__slider-btn__icon"
                aria-hidden="true"
              />
            ) : (
              <i
                className="fa fa-angle-right collection-list__slider-btn__icon collection-list__slider-btn__icon--disable"
                aria-hidden="true"
              />
            )}
          </span>
        </div>
      </React.Fragment>
    );
  }
}

MovieCollection.propTypes = {
  movieCollectionList: PropTypes.array.isRequired,
  collectionName: PropTypes.string.isRequired
};

export default MovieCollection;
