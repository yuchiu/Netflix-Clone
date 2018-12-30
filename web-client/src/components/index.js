import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import { userAction } from "@/actions";
import { Navbar, Footer } from "./common";
import AuthRoute from "./AuthRoute";
import LandingPage from "./LandingPage";
import MoviePage from "./MoviePage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import MyProfilePage from "./MyProfilePage";
import SearchMovieResultPage from "./SearchMovieResultPage";
import NotFoundPage from "./NotFoundPage";

class Routes extends React.Component {
  componentDidMount() {
    // try to log in user automatically if auth info exist
    const { fetchTryAutoSignIn } = this.props;
    fetchTryAutoSignIn();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/movie/:movieId" component={MoviePage} />
            <Route
              exact
              path="/movie-search/:filter"
              component={SearchMovieResultPage}
            />
            <AuthRoute exact path="/my-profile" component={MyProfilePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

Routes.propTypes = {
  fetchTryAutoSignIn: PropTypes.func.isRequired
};

const dispatchToProps = dispatch => ({
  fetchTryAutoSignIn: () => {
    dispatch(userAction.fetchTryAutoSignIn());
  }
});

export default connect(
  null,
  dispatchToProps
)(Routes);
