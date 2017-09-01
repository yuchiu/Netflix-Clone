import React from 'react';
import SearchItem from './SearchItem';

class SearchResult extends React.Component {

  render() {

    let movies = this
      .props
      .movies
      .slice(0, 1);
    movies = movies[0]
    
    return (
      <div id="result-container">
        <ul>

          {movies
            .movies
            .map((movie, i) => {
              return <SearchItem key={movie.id} movie={movie}/>
            })}
        </ul>
      </div>
    )
  }

}

export default SearchResult;
