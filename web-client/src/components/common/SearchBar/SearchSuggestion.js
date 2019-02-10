import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchSelector } from "@/selectors";

import { searchAction } from "@/actions";
import "./SearchSuggestion.scss";

class SuggestionItem extends React.Component {
  handleChooseSuggestion = e => {
    const { history, suggestion, clearSearchSuggestion } = this.props;
    history.push(`/movie/${suggestion.id}`);
    clearSearchSuggestion();
  };

  render() {
    const { suggestion } = this.props;
    return (
      <div className="movie-suggest-item" onClick={this.handleChooseSuggestion}>
        <img
          alt="poster"
          className="movie-suggest-item__img"
          src={suggestion.data.poster}
        />
        <div className="movie-suggest-item__meta">
          <h3 className="movie-suggest-item__meta__title">
            {suggestion.data.title}
          </h3>
          <h3 className="movie-suggest-item__meta__rating">
            IMDB: {suggestion.data.imdb_ratingValue}
          </h3>
        </div>
      </div>
    );
  }
}

class SearchSuggestion extends React.Component {
  render() {
    const {
      searchSuggestionList,
      history,
      handleSearch,
      clearSearchSuggestion
    } = this.props;
    return (
      <ul className="search-suggestion-wrapper">
        {searchSuggestionList.length > 0 && (
          <React.Fragment>
            {searchSuggestionList.map((suggestion, i) => (
              <SuggestionItem
                key={`suggestion-index-${i}`}
                history={history}
                suggestion={suggestion}
                clearSearchSuggestion={clearSearchSuggestion}
              />
            ))}
            <div
              className="movie-suggest-item movie-suggest-item--all"
              onClick={handleSearch}
            >
              View All
            </div>
          </React.Fragment>
        )}
      </ul>
    );
  }
}
const stateToProps = state => ({
  searchSuggestionList: searchSelector.getSearchSuggestionList(state)
});

const dispatchToProps = dispatch => ({
  clearSearchSuggestion: () => {
    dispatch(searchAction.clearSearchSuggestion());
  }
});

SearchSuggestion.propTypes = {
  history: PropTypes.object.isRequired,

  clearSearchSuggestion: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(SearchSuggestion)
);
