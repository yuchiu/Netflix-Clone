import React from 'react';
import Slider from './Slider'
import List from './List'

class HomePage extends React.Component {

  render() {
    return (
        <div className = "homePage-container">
            <Slider/>
        <div className="list-title">
          <h3>Up Coming</h3>
        </div>
            <List actions = {this.props.actions} movieData = {this.props.movieData}/>
        <div className="list-title">
          <h3>Trending Now</h3>
        </div>
            <List actions = {this.props.actions} movieData = {this.props.movieData}/>
        </div>
    )
  }

}

export default HomePage;