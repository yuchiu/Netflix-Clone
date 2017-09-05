import React from 'react';
import SearchItem from './SearchItem';

class SearchList extends React.Component {

  render() {

    let movies = this
      .props
      .movieData
    return (
      <div id="result-container">
        <ul>

          {movies
            .movies
            .map((movie, i) => {
              return <SearchItem key={movie.id} movie={movie}  actions={this.props.actions}/>
            })}
        </ul>
      </div>
    )
  }

}

export default SearchList;
