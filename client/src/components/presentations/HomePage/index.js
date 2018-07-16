import React from "react";
import Slider from "./Slider";
import UpComingList from "./UpComingList";
import PopularList from "./PopularList";
import TopRatedList from "./TopRatedList";
import NowPlayingList from "./NowPlayingList";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage-container">
        <Slider />
        <div className="list-title">
          <h3>Up Coming</h3>
        </div>
        <UpComingList
          movieActions={this.props.movieActions}
          upcoming={this.props.upcoming}
        />
        <div className="list-title">
          <h3>Popular</h3>
        </div>
        <PopularList
          movieActions={this.props.movieActions}
          popular={this.props.popular}
        />
        <div className="list-title">
          <h3>Top Rated</h3>
        </div>
        <TopRatedList
          movieActions={this.props.movieActions}
          topRated={this.props.topRated}
        />
        <div className="list-title">
          <h3>Now Playing</h3>
        </div>
        <NowPlayingList
          movieActions={this.props.movieActions}
          nowPlaying={this.props.nowPlaying}
        />
      </div>
    );
  }
}

export default HomePage;
