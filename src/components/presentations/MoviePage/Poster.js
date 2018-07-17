import React from "react";
import Proptypes from "prop-types";

const Poster = ({ posterPath }) => (
  <div id="poster-container">
    <img id="poster" src={posterPath} />
  </div>
);

Poster.propTypes = {
  posterPath: Proptypes.string
};

export default Poster;
