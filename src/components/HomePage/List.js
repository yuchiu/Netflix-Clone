import React from 'react';
import ListItem from './ListItem';
import {Link} from 'react-router-dom'
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class List extends React.Component {
  constructor() {
    super();
  }


  componentWillMount() {
    this
      .props
      .actions
      .fetchUpComing();
  }

  
  renderUpcomingMovies(upcomingMovies){
    let upComing = upcomingMovies.upComing
    return (upComing
      .map((movie, i) => {
        return <ListItem key={movie.id} movie={movie}  actions={this.props.actions}/>
      }))
  
  
  }
      

  handleLeftClick(e) {
    e.preventDefault();
    const el = findDOMNode(this.refs.content);
    $(el).animate({
      marginLeft: "+=400px"
    }, "fast");
  }
  
  handleRightClick(e) {
    e.preventDefault();
    const el = findDOMNode(this.refs.content);
    $(el).animate({
      marginLeft: "-=400px"
    }, "fast");
  }
  render() {


    return (
      <div className="list-container">
        <div className="list-title">
          <h3>Up Coming</h3>
        </div>

        <span
          id="controlL"
          onClick={this
          .handleLeftClick
          .bind(this)}
          className="left-controls"
          role="button">
          <b></b>
        </span>


        <div className="module-section clearfix">
          <ul id="content" ref='content'>
        <div className="row">
        {this.renderUpcomingMovies(this.props.movieData)}
        </div>

        </ul>
          </div>

        <span
          id="controlR"
          onClick={this
          .handleRightClick
          .bind(this)}
          className="right-controls"
          role="button">
          <b className="form-arrow"></b>
        </span>

      </div>
    )
  }

}

export default List;