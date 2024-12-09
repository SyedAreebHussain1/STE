import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, } from "react-router-dom";
import { ConfigProvider } from "antd";
import { store } from "./store/store.ts";
import antConfig from "../ant.config.ts";
import App from "./App.tsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider theme={antConfig}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
);
