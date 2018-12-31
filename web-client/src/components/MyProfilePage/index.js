import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";
import { userSelector } from "../../selectors";

const MyProfilePage = ({ histories }) => (
  <div className="my-profile-page page-wrapper">
    <p className="my-profile-title">my profile page</p>
    <h3>bookmark</h3>
    <h3>history</h3>
    <p>{histories.length} recent history</p>
    {histories.map((history, i) => (
      <div key={`movie-history-${i}`} className="history-list__wrapper">
        <div>{history.movie_title}</div>
        <div>{history.movie_description}</div>
        <br />
      </div>
    ))}
  </div>
);

const stateToProps = state => ({
  histories: userSelector.getHistories(state)
});

export default connect(
  stateToProps,
  null
)(MyProfilePage);
