import React from 'react';
import {bindActionCreators} from 'redux';
import actions from '../actions/'
import {connect} from 'react-redux'

import '../../assets/scss/styles.scss';
import Nav from  './Nav';
import List from  './List';
import Slider from  './Slider';
import Footer from  './Footer';
import SearchPage from './SearchPage';
import MoviePage from './MoviePage';

class Layout extends React.Component {

  render() {


    
    return (
      <div>
        <Nav actions = {this.props.actions}/>
        <SearchPage movies = {this.props.search}/>
        <Slider />
        <List actions = {this.props.actions}/>
        <MoviePage theMovie= {this.props.search}/>
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