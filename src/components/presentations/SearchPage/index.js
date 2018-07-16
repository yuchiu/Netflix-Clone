import React from "react";
import SearchList from "./SearchList";

class SearchPage extends React.Component {
  render() {
    return (
      <div className="SearchPage-container">
        <SearchList
          movieActions={this.props.movieActions}
          searchReducer={this.props.searchReducer}
        />
      </div>
    );
  }
}

export default SearchPage;
