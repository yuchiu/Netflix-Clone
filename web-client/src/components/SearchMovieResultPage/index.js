import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { movieAction } from "@/actions";
import { movieSelector } from "@/selectors";
import "./index.scss";

class SearchMovieResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParam: ""
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  componentDidUpdate() {
    const {
      match: {
        params: { searchTerm }
      }
    } = this.props;
    const { currentParam } = this.state;

    /* fetch search if param has changed */
    if (currentParam !== searchTerm) this.handleSearch();
  }

  componentWillUnmount() {
    this.setState({ currentParam: "" });
  }

  handleSearch = () => {
    const {
      match: {
        params: { searchTerm }
      }
    } = this.props;
    console.log("fetchMovieSearch(searchTerm);");
    this.setState({ currentParam: searchTerm });
  };

  render() {
    const {
      match: {
        params: { searchTerm }
      }
    } = this.props;
    return (
      <div className="search-movie-result-page-wrapper page-wrapper">
        SearchMovieResultPage, search for {searchTerm}
      </div>
    );
  }
}
SearchMovieResultPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const stateToProps = state => ({});

const dispatchToProps = dispatch => ({});

export default connect(
  stateToProps,
  dispatchToProps
)(SearchMovieResultPage);
