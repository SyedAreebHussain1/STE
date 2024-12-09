import React from "react";
import { Spin } from "antd";

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
      />
    </div>
  );
};

export default PageLoading;
