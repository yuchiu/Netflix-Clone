import React from 'react';
import {Link} from 'react-router-dom'

class SearchItem extends React.Component {

  handleClick(){
    this
      .props.actions
      .fetchMovie(this.props.movie.id)
  }
  render() {

    return (

      <li >

 <div className="search-tile">
 <img src={`http://image.tmdb.org/t/p/w300//${this.props.movie.poster_path}`}/>
            <div className=" photo-overlay">

              <div className="tile-text-container">
              <div className="playbtn-container">


              <Link className="playBtn " to='/movie'
              onClick={this.handleClick.bind(this)}
              >▶</Link>

              
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
        
      </li>
    )
  }

}

export default SearchItem;

/**
 * 
 * 
 * <div className="tile">
            <img
              className="tile-img"
              src="https://assets.libsyn.com/secure/show/88177/New_Westworld_Logo.jpg"/>
            <div className=" photo-overlay">

              <div className="tile-text-container">
              <div className="playbtn-container">


              <Link className="playBtn " to='/movie'
              onClick={this.handleClick.bind(this)}
              >▶</Link>

              
              </div>
                <h5 className="tile-title">West World</h5>
                <p className="tile-desc">
                  <b>97% Match 2016 TV-14 season 1</b><br/>
                  Nam gravida viverra velit venenatis elementum. Phasellus egestas volutpa</p>
              </div>
              <div className="tile-btn-container">
                <button className="addListBtn">+</button>
              </div>
            </div>
          </div>
 */