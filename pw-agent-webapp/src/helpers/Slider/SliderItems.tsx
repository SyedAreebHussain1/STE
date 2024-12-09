import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
interface props {
  children: React.ReactNode;
  width?: string | number;
  className?: string;
  height?: string | number;
}

const SliderItem = ({ children, width, className, height }: props) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <div
      className={`flex-shrink-0  ${className}`}
      style={{
        width: isSmallDevice.getSnapshot()
          ? window.innerWidth - 32
          : width || "25%",
        height: height || "auto",
      }}
    >
      {children}
    </div>
  );
};

export default SliderItem;
