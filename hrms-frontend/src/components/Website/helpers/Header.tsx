import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import HeaderLeftComponent from "./HeaderLeftComponent";
import HeaderRightComponent from "./HeaderRightComponent";

const Header = () => {
  return (
    <div className="mt-[35px] flex gap-[22px]  h-[645px]  ">
      <HeaderLeftComponent />
      <HeaderRightComponent />
    </div>
  );
};

export default Header;
