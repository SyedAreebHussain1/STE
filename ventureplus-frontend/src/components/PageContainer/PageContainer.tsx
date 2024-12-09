import React from "react";

type PageContainerProps = {
  classList?: string;
  children: React.ReactNode;
};

export const PageContainer = ({ classList, children }: PageContainerProps) => {
  return (
    <div
      className={`p-8 sm:pl-24  overflow-y-auto max-w-[1836px] w-full h-full ${classList}`}
    >
      {children}
    </div>
  );
};
