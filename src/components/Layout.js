import React from 'react';
import {bindActionCreators} from 'redux';
import actions from '../actions/'
import {connect} from 'react-redux'

import '../../assets/scss/styles.scss';
import Nav from  './Nav';
import Footer from  './Footer';

import HomePage from  './HomePage/';
import SearchPage from './SearchPage/';
import MoviePage from './MoviePage/';

import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from 'react-router-dom'

class Layout extends React.Component {

  render() {


    
    return (
      <div>
        <Nav actions = {this.props.actions}/>
        <HomePage actions = {this.props.actions}/>
        <SearchPage movieData = {this.props.search}/>
        <MoviePage movieData= {this.props.search}/>
        <Footer />
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