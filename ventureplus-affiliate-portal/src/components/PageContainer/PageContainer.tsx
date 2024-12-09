import React from "react";

type PageContainerProps = {
  classList?: string;
  children: React.ReactNode;
};

const PageContainer = ({ classList, children }: PageContainerProps) => {
  return (
    <div
      className={`p-8 pl-15 overflow-y-auto max-w-[1836px] bg-[#f0f4f4] w-full h-full ${classList}`}
    >
      {children}
    </div>
  );
};
export default PageContainer