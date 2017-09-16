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
import NotFoundPage from './NotFoundPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class Layout extends React.Component {

  render() {
    const theHomePage = (props) => {
      return (<HomePage
        actions={this.props.actions}
        upcoming={this.props.upcoming}
        popular={this.props.popular}
        topRated={this.props.topRated}
        nowPlaying={this.props.nowPlaying}
        {...props}/>);
    }
    const theSearchPage = (props) => {
      return (<SearchPage actions={this.props.actions} search={this.props.search} {...props}/>);

    }
    const theMoviePage = (props) => {
      return (<MoviePage
        actions={this.props.actions}
        theMovie={this.props.theMovie}
        castList={this.props.castList}
        {...props}/>);
    }
    return (
      <Router>
        <div>
          <Nav actions={this.props.actions}/>
          <Switch>
            <Route exact path="/" render={theHomePage}/>
            <Route exact path="/search" render={theSearchPage}/>
            <Route exact path="/movie" render={theMoviePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
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
