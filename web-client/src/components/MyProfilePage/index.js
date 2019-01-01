import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";
import { userSelector } from "../../selectors";
import { MoviePosterList } from "@/components/common";

class MyProfilePage extends React.Component {
  routeToMoviePage = movieId => {
    const { history } = this.props;
    history.push(`/movie/${movieId}`);
  };

  render() {
    const { histories, bookmarks, username } = this.props;
    return (
      <div className="my-profile-page page-wrapper">
        <div className="profile-greeting">
          <p className="profile-greeting__p">
            {username}
            's Profile Page
          </p>
        </div>
        <div className="profile-movie-list">
          <h3 className="profile-movie-list__title">Bookmark</h3>
          <p className="profile-movie-list__desc">
            {bookmarks.length} bookmarked movies <button>View All</button>
          </p>
          <MoviePosterList movieList={bookmarks} maxDisplayLength={6} />
        </div>
        <div className="profile-movie-list">
          <h3 className="profile-movie-list__title">History</h3>
          <p className="profile-movie-list__desc">
            {histories.length} recent movie browsing histories{" "}
            <button>View All</button>
          </p>
          <MoviePosterList movieList={histories} maxDisplayLength={6} />
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({
  histories: userSelector.getHistories(state),
  bookmarks: userSelector.getBookmarks(state),
  username: userSelector.getCurrentUsername(state)
});

export default connect(
  stateToProps,
  null
)(MyProfilePage);
