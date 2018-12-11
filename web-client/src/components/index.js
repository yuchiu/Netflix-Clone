import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import LandingPage from "./LandingPage";
import NotFoundPage from "./NotFoundPage";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
