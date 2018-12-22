import React from "react";

import "./MovieCollection.scss";

const MovieCollection = ({ movieCollectionList, collectionName }) => (
  <React.Fragment>
    <h1 className="collection-title">{collectionName}</h1>
    <div className="collection-list">
      <div className="collection-list__slider-btn collection-list__slider-btn--left">
        {"<"}
      </div>
      {movieCollectionList.map((movie, i) => (
        <div
          className="collection-list__item"
          style={{ backgroundImage: `url(${movie.data.trailer_img})` }}
          key={`collection-${collectionName}-${i}`}
        >
          <h4 className="collection-list__item__title">{movie.data.title}</h4>
          <div className="collection-list__item__desc">
            {movie.data.taglines}
          </div>
        </div>
      ))}
      <div className="collection-list__slider-btn collection-list__slider-btn--right">
        {">"}
      </div>
    </div>
  </React.Fragment>
);
export default MovieCollection;
