import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MoviePage extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { movieId }
      }
    } = this.props;
  }

  componentWillUnmount() {}

  render() {
    const {
      match: {
        params: { movieId }
      }
    } = this.props;
    return <div id="moviePage-container">movie page id {movieId}</div>;
  }
}

MoviePage.propTypes = {};

const stateToProps = state => ({});

const dispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(MoviePage)
);
