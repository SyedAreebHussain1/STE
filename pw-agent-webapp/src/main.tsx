import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import antConfig from "../ant.config.ts";
import { MotionConfig } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider theme={antConfig}>
          <MotionConfig>
            <App />
          </MotionConfig>
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
