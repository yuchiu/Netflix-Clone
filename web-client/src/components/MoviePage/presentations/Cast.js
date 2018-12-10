import React from "react";
import Proptypes from "prop-types";

const Cast = ({ person }) => (
  <div className="cast-item">
    <img
      className="cast-profile-img"
      src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
    />
    <p className="lead">{person.name}</p>
  </div>
);

Cast.propTypes = {
  person: Proptypes.object
};

export default Cast;
