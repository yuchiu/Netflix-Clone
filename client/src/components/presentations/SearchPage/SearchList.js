/*eslint-disable*/
import React from 'react';
import SearchItem from './SearchItem';

class SearchList extends React.Component {

  render() {

    return (
      <div id="result-container">
        <ul>
          {this
            .props
            .search
            .map((movie, i) => {
              return <SearchItem key={movie.id} movie={movie} actions={this.props.actions}/>
            })}
        </ul>
      </div>
    )
  }

}

export default SearchList;
