import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { MoviePosterList } from "@/components/common";

const SearchResult = ({ searchMovieResult }) => (
  <MoviePosterList movieList={searchMovieResult} maxDisplayLength={20} />
);

SearchResult.propTypes = {
  searchMovieResult: PropTypes.array.isRequired
};

export default withRouter(SearchResult);
