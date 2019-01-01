import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";
import { userSelector } from "../../selectors";
import { MoviePosterList } from "@/components/common";

class MyProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: {
        bookmarks: false,
        histories: false
      }
    };
  }

  routeToMoviePage = movieId => {
    const { history } = this.props;
    history.push(`/movie/${movieId}`);
  };

  toggleExpand = e => {
    const { isExpand } = this.state;
    const field = e.target.name;
    isExpand[field] = !isExpand[field];

    this.setState({
      isExpand
    });
  };

  render() {
    const { isExpand } = this.state;
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
          {isExpand.bookmarks ? (
            <React.Fragment>
              <p className="profile-movie-list__desc">
                {bookmarks.length} bookmarked movies
              </p>
              <MoviePosterList
                movieList={bookmarks}
                maxDisplayLength={bookmarks.length}
              />
              <div className="profile-movie-list__toggle-expand">
                <button
                  className="profile-movie-list__toggle-expand__btn"
                  name="bookmarks"
                  onClick={this.toggleExpand}
                >
                  Collapse
                </button>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="profile-movie-list__desc">
                {bookmarks.length} bookmarked movies
              </p>
              <MoviePosterList movieList={bookmarks} maxDisplayLength={6} />
              <div className="profile-movie-list__toggle-expand">
                {bookmarks.length > 6 && (
                  <button
                    className="profile-movie-list__toggle-expand__btn"
                    name="bookmarks"
                    onClick={this.toggleExpand}
                  >
                    Expand
                  </button>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="profile-movie-list">
          <h3 className="profile-movie-list__title">History</h3>
          {isExpand.histories ? (
            <React.Fragment>
              <p className="profile-movie-list__desc">
                {histories.length} recent movie browsing histories
              </p>
              <MoviePosterList
                movieList={histories}
                maxDisplayLength={histories.length}
              />
              <div className="profile-movie-list__toggle-expand">
                <button
                  className="profile-movie-list__toggle-expand__btn"
                  name="histories"
                  onClick={this.toggleExpand}
                >
                  Collapse
                </button>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="profile-movie-list__desc">
                {histories.length} recent movie browsing histories
              </p>
              <MoviePosterList movieList={histories} maxDisplayLength={6} />
              <div className="profile-movie-list__toggle-expand">
                {histories.length > 6 && (
                  <button
                    className="profile-movie-list__toggle-expand__btn"
                    name="histories"
                    onClick={this.toggleExpand}
                  >
                    Expand
                  </button>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
MyProfilePage.propTypes = {
  histories: PropTypes.array.isRequired,
  bookmarks: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const stateToProps = state => ({
  histories: userSelector.getHistories(state),
  bookmarks: userSelector.getBookmarks(state),
  username: userSelector.getCurrentUsername(state)
});

export default connect(
  stateToProps,
  null
)(MyProfilePage);
