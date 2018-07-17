import React from "react";
import { Slider } from "../presentations/HomePage";
import { HomeList } from "../containers";

const HomePage = () => (
  <div className="homePage-container">
    <Slider />
    <HomeList />
  </div>
);

export default HomePage;
