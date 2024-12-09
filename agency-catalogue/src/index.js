import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App";
import store from "./redux/store";
import "./index.css";

// axios.defaults.baseURL = "https://stagingbackend.propertywallet.pk/V1/";
axios.defaults.baseURL = "https://developmentbackend.propertywallet.pk/V1/";
// axios.defaults.baseURL = "http://192.168.18.246:3000/v1/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
