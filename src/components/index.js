import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import { LandingPage, MoviePage, SearchPage, NotFoundPage } from "./allRoutes";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/movie" exact component={MoviePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
