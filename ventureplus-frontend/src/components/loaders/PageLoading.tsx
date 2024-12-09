import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { LoadingGIF } from "../../assets";

interface PageLoadingProps {
  fullPage?: boolean;
}

const PageLoading: React.FC<PageLoadingProps> = ({ fullPage = false }) => {
  const antIcon = (
    <img src={LoadingGIF} style={{ width: "220px", height: "150px" }} />
  );
  return (
    <div
      className={
        fullPage
          ? "fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50"
          : "flex items-center justify-center h-full  w-full"
      }
    >
      <Spin size="large" indicator={antIcon} className="w-full" />
    </div>
  );
};

export default PageLoading;
