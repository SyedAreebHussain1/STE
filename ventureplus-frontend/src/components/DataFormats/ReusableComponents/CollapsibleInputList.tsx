import classNames from "classnames";
import { useState } from "react";

interface CollapsibleInputListI {
  children: any;
  title: string;
}

const CollapsibleInputList = ({ children, title }: CollapsibleInputListI) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = (e: any) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#fff] rounded-md  flex flex-col items-center justify-start text-start overflow-hidden w-full cursor-pointer">
      <h1 className="text-title p-2 w-full" onClick={toggleCollapse}>
        {isOpen ? (
          <span className="flex gap-3 items-center">
            <p> {">"} </p>
            <p>{title}</p>
          </span>
        ) : (
          title
        )}
      </h1>
      <div
        className={classNames(
          "transition-all duration-200 ease-in-out overflow-hidden w-full px-2",
          {
            "max-h-0 opacity-0": !isOpen,
            "max-h-screen opacity-100": isOpen,
          }
        )}
      >
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleInputList;
