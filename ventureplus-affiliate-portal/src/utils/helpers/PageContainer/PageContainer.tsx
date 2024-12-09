import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="px-[8px] py-[8px] md:py-[30px] md:px-[20px] bg-[#F0F4F4] h-full">
      {children}
    </div>
  );
};
