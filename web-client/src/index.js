import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import { Provider } from "react-redux";

import store from "./store";
import Router from "./components";
import * as serviceWorker from "./serviceWorker";

dotenv.config({ path: "../.env" });

const app = (
  <Provider store={store}>
    <Router />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
