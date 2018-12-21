import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./components";
import * as serviceWorker from "./serviceWorker";

dotenv.config({ path: "../.env" });

const App = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
