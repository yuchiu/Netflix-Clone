import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import { Navbar, Footer } from "./common";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import NotFoundPage from "./NotFoundPage";

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);
export default Router;
