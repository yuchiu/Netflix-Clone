import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { searchAction } from "@/actions";
import { searchSelector } from "@/selectors";
import "./index.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ENTER_KEY: 13,
      searchForm: {
        searchText: ""
      }
    };
  }

  handleFocusOnSearch = () => {
    this.searchInput.focus();
  };

  handleChange = e => {
    const { searchForm } = this.state;
    const field = e.target.name;
    searchForm[field] = e.target.value;

    this.setState({
      searchForm
    });
    setTimeout(this.changeSearchParam, 300);
  };

  changeSearchParam = () => {
    const {
      searchForm: { searchText }
    } = this.state;
    const { history, clearMovieSearchResult, resultFromIndex } = this.props;
    if (searchText) {
      history.push(
        `/movie-search/filter?search_term=${searchText}&from_index=${resultFromIndex}`
      );
    } else {
      clearMovieSearchResult();
      history.push(`/`);
    }
  };

  render() {
    const { searchForm, ENTER_KEY } = this.state;
    const { cssClass } = this.props;
    return (
      <div className={`searchbar-wrapper ${cssClass}`}>
        <div className="searchbar-focus">
          <i
            className="fas fa-search searchbar-icon pointer-cursor"
            onClick={this.handleFocusOnSearch}
          />
          <input
            ref={input => {
              this.searchInput = input;
            }}
            name="searchText"
            value={searchForm.searchText}
            onChange={this.handleChange}
            className="searchbar-focus__input"
            placeholder="Search for Movies"
            onKeyDown={e => {
              if (e.keyCode === ENTER_KEY) this.changeSearchParam();
            }}
          />
        </div>
      </div>
    );
  }
}
const stateToProps = state => ({
  resultFromIndex: searchSelector.getResultFromIndex(state)
});

const dispatchToProps = dispatch => ({
  clearMovieSearchResult: () => {
    dispatch(searchAction.clearMovieSearchResult());
  }
});

SearchBar.propTypes = {
  cssClass: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  clearMovieSearchResult: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(SearchBar)
);
