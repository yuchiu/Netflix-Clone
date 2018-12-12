import React from "react";

const CollectionList = ({ movieCollectionList }) => (
  <div>
    {movieCollectionList.popular.map((movie, i) => (
      <div key={`collection-trending-${i}`}>{movie.id}</div>
    ))}
  </div>
);
export default CollectionList;
