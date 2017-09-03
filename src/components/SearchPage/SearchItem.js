import React from 'react';

class SearchItem extends React.Component {

  render() {

    return (

      <li >
        <a href={`http://image.tmdb.org/t/p/w500//${this.props.movie.poster_path}`}>
          <img src={`http://image.tmdb.org/t/p/w300//${this.props.movie.poster_path}`}/>
        </a>
        <b>
        {this.props.movie.title}
        </b>
        <p>
          {this.props.movie.overview}
        </p>
      </li>
    )
  }

}

export default SearchItem;
