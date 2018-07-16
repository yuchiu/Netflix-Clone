import React from "react";
import Movie from "./Movie";

class MoviePage extends React.Component {
  render() {
    return (
      <div className="MoviePage-container">
        <Movie
          movieActions={this.props.movieActions}
          castList={this.props.castList}
          theMovie={this.props.theMovie}
        />
      </div>
    );
  }
}

export default MoviePage;
