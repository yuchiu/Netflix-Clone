/*eslint-disable*/
import React from 'react';

class Cast extends React.Component {

  render() {

    return (
      <div className="cast-item">
        <img src={`https://image.tmdb.org/t/p/w150${this.props.person.profile_path}`}/>
        <p className="lead">{this.props.person.name}</p>
      </div>
    )
  }

}

export default Cast;