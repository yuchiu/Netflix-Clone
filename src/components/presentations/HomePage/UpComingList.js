/*eslint-disable*/
import React from 'react';
import ListItem from './ListItem';
import {Link} from 'react-router-dom'
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class upComingList extends React.Component {
  constructor() {
    super();
    this.state = {
      margin: 0
    }
  }


  renderUpcoming(upcomingMovies) {

    return (upcomingMovies.map((movie, i) => {
      return <ListItem key={movie.id} movie={movie} movieActions={this.props.movieActions}/>
    }))

  }

  handleLeftClick(e) {
    e.preventDefault();
    if (this.state.margin < 350) {
      this.setState({
        margin: this.state.margin + 350
      })
      const el = findDOMNode(this.refs.content);
      $(el).animate({
        marginLeft: "+=350px"
      }, "fast");
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    if (this.state.margin > -4200) {
      this.setState({
        margin: this.state.margin - 350
      })
      const el = findDOMNode(this.refs.content);
      $(el).animate({
        marginLeft: "-=350px"
      }, "fast");
    }
  }
  render() {

    return (
      <div className="list-container">
        <span
          onClick={this
          .handleLeftClick
          .bind(this)}
          className="left-controls"
          role="button"></span>

        <div className="module-section clearfix">
          <ul id="content" ref='content'>
            <div className="listRow">
              {this.renderUpcoming(this.props.upcoming)}
            </div>

          </ul>
        </div>

        <span
          onClick={this
          .handleRightClick
          .bind(this)}
          className="right-controls"
          role="button"></span>

      </div>
    )
  }

}

export default upComingList;