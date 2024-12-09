import React from "react";
import { Spin } from "antd";
import loadingLogo from "./../../assets/loadingLogo.gif";

interface PageLoadingProps {
  fullPage?: boolean;
}

const PageLoading: React.FC<PageLoadingProps> = ({ fullPage = false }) => {
  return (
    <div
      className={
        fullPage
          ? "fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50"
          : "flex items-center justify-center h-full  w-full"
      }
    >
      <Spin
        size="large"
        indicator={
          <img
            src={loadingLogo}
            alt="Loading..."
            style={{ fontSize: fullPage ? 100 : 70 }}
          />
        }
      />
    </div>
  );
};

export default PageLoading;
