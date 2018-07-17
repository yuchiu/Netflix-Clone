import React from "react";
import { Slider } from "../presentations/HomePage";
import { HomeList } from "../containers";
import { Nav, Footer } from "../presentations";

const HomePage = () => (
  <div className="homePage-container">
    <Nav />
    <Slider />
    <HomeList />
    <Footer />
  </div>
);

export default HomePage;
