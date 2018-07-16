import React from "react";
import Movie from "./Movie";

class MoviePage extends React.Component {
  render() {
    return (
      <div className="MoviePage-container">
        <Movie
          movieActions={this.props.movieActions}
          castListReducer={this.props.castListReducer}
          theMovieReducer={this.props.theMovieReducer}
        />
      </div>
    );
  }
}

export default MoviePage;
