import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./components";

import store from "./store";

const app = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
