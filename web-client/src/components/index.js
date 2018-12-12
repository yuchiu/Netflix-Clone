import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import LandingPage from "./LandingPage";
import NotFoundPage from "./NotFoundPage";

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
export default Router;
