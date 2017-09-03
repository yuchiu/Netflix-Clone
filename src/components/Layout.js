import React from 'react';
import {bindActionCreators} from 'redux';
import actions from '../actions/'
import {connect} from 'react-redux'

import '../../assets/scss/styles.scss';
import Nav from './Nav';
import Footer from './Footer';

import HomePage from './HomePage/';
import SearchPage from './SearchPage/';
import MoviePage from './MoviePage/';

import {BrowserRouter as Router, Route} from 'react-router-dom'

class Layout extends React.Component {

  render() {
    const theHomePage = (props) => {
      return (<HomePage actions={this.props.actions} {...props}/>);
    }
    const theSearchPage = (props) => {
      return (<SearchPage movieData={this.props.search} {...props}/>);
    }
    const theMoviePage = (props) => {
      return (<MoviePage movieData={this.props.search} {...props}/>);
    }
    return (
      <Router>
        <div>
          <Nav actions={this.props.actions}/>
          <Route exact path="/" render={theHomePage}/>
          <Route exact path="/search" render={theSearchPage}/>
          <Route exact path="/movie" render={theMoviePage}/>
          <Footer/>
        </div>
      </Router>
    )
  }

}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

/**
 *
      <div>
        <Nav actions = {this.props.actions}/>
        <HomePage actions = {this.props.actions}/>
        <SearchPage movieData = {this.props.search}/>
        <MoviePage movieData= {this.props.search}/>
        <Footer />
      </div>
 *
 *
 */

/**
  *
class Layout extends React.Component {

  render() {
    const theHomePage = (props) => {
      return (<HomePage actions={this.props.actions} {...props}/>);
    }
    const theSearchPage = (props) => {
      return (<SearchPage movieData={this.props.search} {...props}/>);
    }
    const theMoviePage = (props) => {
      return (<SearchPage movieData={this.props.search} {...props}/>);
    }
    return (
      <Router>
      <div>
        <Nav actions = {this.props.actions}/>
        <Switch>
          <Route exact path="/" render={theHomePage}/>
          <Route path="/search" render={theSearchPage}/>
          <Route path="/movie" render={theMoviePage}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    )
  }

}

  */