import React from 'react';
import {bindActionCreators} from 'redux';
import actions from '../actions/'
import {connect} from 'react-redux'

import '../../assets/scss/styles.scss';
import Nav from  './Nav';
import List from  './List';
import Slider from  './Slider';
import Footer from  './Footer';
import SearchResult from './SearchResult';


class Layout extends React.Component {

  render() {
    return (
      <div>
        <Nav actions = {this.props.actions}/>
        <SearchResult movies = {this.props.search}/>
        <Slider/>
        <List/>
        <Footer/>
      </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);