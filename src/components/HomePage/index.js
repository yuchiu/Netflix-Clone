import React from 'react';
import Slider from './Slider'
import List from './List'

class HomePage extends React.Component {

  render() {
    return (
      <div className="homePage-container">
        <Slider/>
        <div className="list-title">
          <h3>Up Coming</h3>
        </div>
        <List actions={this.props.actions} upcoming={this.props.upcoming} />
      </div>
    )
  }


}

export default HomePage;