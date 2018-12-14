import React from "react";

import "./MovieCollection.scss";

const MovieCollection = ({ movieCollectionList, collectionName }) => (
  <React.Fragment>
    <h1 className="collection-title">{collectionName}</h1>
    <div className="collection-list">
      {movieCollectionList.map((movie, i) => (
        <div
          className="collection-list__item"
          key={`collection-${collectionName}-${i}`}
        >
          <img src={movie.data.trailer_img} alt="trailer-img" />
          <h4 className="collection-list__item__title">{movie.data.title}</h4>
          <div className="collection-list__item__desc">
            {movie.data.taglines}
          </div>
        </div>
      ))}
    </div>
  </React.Fragment>
);
export default MovieCollection;
