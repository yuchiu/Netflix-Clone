import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  handleSearch = () => {
    const { searchForm } = this.state;
    console.log(searchForm.searchText);
  };

  render() {
    const { cssClass } = this.props;
    const { searchForm } = this.state;
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
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  cssClass: PropTypes.string.isRequired
};

export default SearchBar;
