import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { searchAction } from "@/actions";
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
    const { history, clearMovieSearchResult, location } = this.props;
    // fetch search if there is search text in our input
    if (searchText) {
      history.push(
        `/movie-search/filter?search_term=${searchText}&from_index=0`
      );
    } else {
      // route to landing page and clear result data if there are no text in our search input
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
    null,
    dispatchToProps
  )(SearchBar)
);
