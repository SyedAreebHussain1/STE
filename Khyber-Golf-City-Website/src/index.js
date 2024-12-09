import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n/config";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./fonts/jameelNoori/FajerNoori.ttf";
import "./fonts/codePro/Code-Pro.ttf";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
