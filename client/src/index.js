import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./components/routes";

import configureStore from "./store";

const app = (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
