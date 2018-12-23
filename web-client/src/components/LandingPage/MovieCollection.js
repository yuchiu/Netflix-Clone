import React from "react";

import "./MovieCollection.scss";

const MovieCollection = ({ movieCollectionList, collectionName }) => (
  <React.Fragment>
    <h2 className="collection-title">{collectionName}</h2>
    <div className="collection-list">
      <div className="collection-list__slider-btn collection-list__slider-btn--left">
        {"<"}
      </div>
      {movieCollectionList.map((movie, i) => (
        <div
          className="collection-list__item pointer-cursor"
          style={{
            backgroundImage: `url(${
              movie.data.trailer_img
                ? movie.data.trailer_img
                : movie.data.poster
            })`
          }}
          key={`collection-${collectionName}-${i}`}
        >
          <h4 className="collection-list__item__overlay collection-list__item__overlay--title">
            {movie.data.title}
          </h4>
          <div className="collection-list__item__overlay collection-list__item__overlay--desc">
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
