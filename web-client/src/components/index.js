import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import LandingPage from "./LandingPage";
import NotFoundPage from "./NotFoundPage";

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);
export default Router;
