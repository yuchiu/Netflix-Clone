import React from 'react';
import Slider from './Slider'
import List from './List'

class HomePage extends React.Component {

  render() {
    return (
        <div className = "homePage-container">
            <Slider/>
            <List actions = {this.props.actions}/>
        </div>
    )
  }

}

export default HomePage;