import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { Poster, Descriptions } from "./presentations";

const ViewMovie = ({ castList, theMovie }) => (
  <div id="moviePage-container">
    <Poster
      posterPath={`http://image.tmdb.org/t/p/w500//${theMovie.poster_path}`}
    />
    <Descriptions theMovie={theMovie} castList={castList} />
  </div>
);

ViewMovie.propTypes = {
  theMovie: Proptypes.object,
  castList: Proptypes.array
};

const stateToProps = state => ({
  theMovie: state.theMovieReducer.theMovie,
  castList: state.castListReducer.castList.slice(0, 4)
});

const dispatchToProps = null;

export default connect(
  stateToProps,
  dispatchToProps
)(ViewMovie);
