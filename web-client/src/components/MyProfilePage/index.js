import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";
import { userSelector } from "../../selectors";

class MyProfilePage extends React.Component {
  routeToMoviePage = movieId => {
    const { history } = this.props;
    history.push(`/movie/${movieId}`);
  };

  render() {
    const { histories, bookmarks } = this.props;
    return (
      <div className="my-profile-page page-wrapper">
        <p className="my-profile-title">my profile page</p>
        <h3>bookmark</h3>
        <p>{bookmarks.length} bookmarks</p>
        {bookmarks.map((bookmark, i) => (
          <div key={`movie-bookmark-${i}`} className="bookmark-list__wrapper">
            <div>{bookmark.movie_title}</div>
            <div>{bookmark.movie_description}</div>
            <div>imdb rating: {bookmark.movie_rating}</div>
            <div
              className="cursor-pointer"
              onClick={this.routeToMoviePage.bind(this, bookmark.movie_id)}
            >
              Link
            </div>
            <br />
          </div>
        ))}
        <h3>history</h3>
        <p>{histories.length} recent browsing history</p>
        {histories.map((history, i) => (
          <div key={`movie-history-${i}`} className="history-list__wrapper">
            <div>{history.movie_title}</div>
            <div>{history.movie_description}</div>
            <div>imdb rating: {history.movie_rating}</div>
            <div
              className="cursor-pointer"
              onClick={this.routeToMoviePage.bind(this, history.movie_id)}
            >
              Link
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const stateToProps = state => ({
  histories: userSelector.getHistories(state),
  bookmarks: userSelector.getBookmarks(state)
});

export default connect(
  stateToProps,
  null
)(MyProfilePage);
