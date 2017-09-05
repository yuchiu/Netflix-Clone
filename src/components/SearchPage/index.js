import React from 'react';
import SearchList from './SearchList'

class SearchPage extends React.Component {

  render() {
    return (
        <div className = "SearchPage-container">
            <SearchList movieData= {this.props.movieData}  actions={this.props.actions}/>
        </div>
    )
  }

}

export default SearchPage;