import React from 'react';

class ResultItem extends React.Component {

  render() {

    return (

      <li >
        {this.props.movie.title}
        <p>
        {this.props.movie.overview}
            </p>
            <img src= {` http://image.tmdb.org/t/p/w185//${this.props.movie.poster_path}`}   />
      </li>
    )
  }

}

export default ResultItem;
