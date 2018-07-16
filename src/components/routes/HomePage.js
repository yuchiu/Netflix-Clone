import React from "react";
import { Slider } from "../presentations/HomePage";
import { HomeList } from "../containers";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage-container">
        <Slider />
        <HomeList />
      </div>
    );
  }
}

export default HomePage;
