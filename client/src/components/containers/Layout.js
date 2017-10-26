import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import '../../../assets/scss/styles.scss';
import movieActions from '../../services/actions/movieActions'

import Nav from '../presentations/Nav';
import Footer from '../presentations/Footer';

import HomePage from '../presentations/HomePage/';
import AuthPage from '../presentations/AuthPage/';
import SearchPage from '../presentations/SearchPage/';
import MoviePage from '../presentations/MoviePage/';
import NotFoundPage from '../presentations/NotFoundPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class Layout extends React.Component {

  render() {
    const theHomePage = (props) => {
      return (<HomePage
        movieActions={this.props.movieActions}
        upcoming={this.props.upcoming}
        popular={this.props.popular}
        topRated={this.props.topRated}
        nowPlaying={this.props.nowPlaying}
        {...props}/>);
    }
    const theSearchPage = (props) => {
      return (<SearchPage movieActions={this.props.movieActions} search={this.props.search} {...props}/>);

    }
    const theMoviePage = (props) => {
      return (<MoviePage
        movieActions={this.props.movieActions}
        theMovie={this.props.theMovie}
        castList={this.props.castList}
        {...props}/>);
    }
    const AuthPage = (props) => {
      return (<AuthPage/>);
    }
    return (
      <Router>
        <div>
          <Nav movieActions={this.props.movieActions}/>
          <Switch>
            <Route exact path="/" render={theHomePage}/>
            <Route exact path="/search" render={theSearchPage}/>
            <Route exact path="/movie" render={theMoviePage}/>
            <Route exact path="/auth" render={AuthPage}/>
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
    movieActions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
