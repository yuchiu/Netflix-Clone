import React from 'react';
import {Link} from 'react-router-dom'

class ListItem extends React.Component {

  handleClick() {
    this
      .props
      .actions
      .fetchTheMovie(this.props.movie.id)
  }
  render() {

    return (
      <div className="tile">
        <img src={`http://image.tmdb.org/t/p/w300//${this.props.movie.poster_path}`}/>
        <div className=" photo-overlay">

          <div className="tile-text-container">
            <div className="playbtn-container">

              <Link
                className="playBtn "
                to='/movie'
                onClick={this
                .handleClick
                .bind(this)}>▶</Link>

            </div>
            <h5 className="tile-title">
              {this.props.movie.title}</h5>
            <p className="tile-desc">
              {this.props.movie.overview}</p>
          </div>
          <div className="tile-btn-container">
            <button className="addListBtn">+</button>
          </div>
        </div>
      </div>
    )
  }

}

export default ListItem;