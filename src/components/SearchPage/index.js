import React from 'react';
import SearchList from './SearchList'

class SearchPage extends React.Component {

  render() {
    return (
        <div className = "SearchPage-container">
            <SearchList movieData= {this.props.movieData}/>
        </div>
    )
  }

}

export default SearchPage;