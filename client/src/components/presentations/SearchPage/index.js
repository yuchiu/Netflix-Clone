import React from 'react';
import SearchList from './SearchList'

class SearchPage extends React.Component {

  render() {
    return (
        <div className = "SearchPage-container">
            <SearchList movieActions={this.props.movieActions} search={this.props.search}/>
        </div>
    )
  }

}

export default SearchPage;
