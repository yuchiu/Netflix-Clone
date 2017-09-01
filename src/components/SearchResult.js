import React from 'react';
import ResultItem from './ResultItem';

class SearchResult extends React.Component {

  render() {

    let movies = this
      .props
      .movies
      .slice(0, 1);
    movies = movies[0]
    
    return (
      <div>
        <ul>

          {movies
            .movies
            .map((movie, i) => {
              return <ResultItem key={movie.id} movie={movie}/>
            })}
        </ul>
      </div>
    )
  }

}

export default SearchResult;
