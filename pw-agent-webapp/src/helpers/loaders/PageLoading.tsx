import React from "react";
import { Spin } from "antd";

const PageLoading: React.FC = () => (
  <Spin tip="Loading..." size="large" fullscreen>
    <div />
  </Spin>
);

export default PageLoading;
