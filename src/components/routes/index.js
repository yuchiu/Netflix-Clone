import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../presentations/Nav";
import Footer from "../presentations/Footer";

import { HomePage, MoviePage, SearchPage, NotFoundPage } from "./AllRoutes";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/movie" exact component={MoviePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
