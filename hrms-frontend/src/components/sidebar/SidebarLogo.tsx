import darkLogo from "./../../assets/dark-logo.svg";
import lightLogo from "./../../assets/light-logo.svg";
import SalesPlusLogo from "../../assets/SalesPlusLogo.png";
import SalesPlusLogoDark from '../../assets/SalesPlusDarkMode.png'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarLogo = ({ darkMode, current }:any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoute = (location:String) => {
    if (location === "sales-plus") {
      navigate("/sales-plus");
    } else {
      navigate("/");
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between items-center h-[82px] overflow-hidden px-2 dark:bg-dark-grayprimary border-b-[1px] border-gray-200 dark:border-[#ffffff55]">
      {darkMode !== "dark" ? (
        <>
          <img
            src={current === "/sales-plus" ? SalesPlusLogo : lightLogo}
            className={`${current === "/sales-plus" ? "h-10" : "h-40"} w-36`}
            alt=""
          />
          <div>
            <IoIosArrowDown
              size={25}
              className="cursor-pointer"
              onClick={handleDropdownToggle}
            />
            {isDropdownOpen && (
              <div className="bg-white p-2 gap-2 flex flex-col rounded-md shadow-xl absolute z-[99] left-[0px] top-[77px] w-[17rem]">
                <div
                  onClick={() => handleRoute('sales-plus')}
                  className={`flex justify-between p-4 cursor-pointer rounded-xl ${
                   current === "/sales-plus"
                      ? "border-light-primary"
                      : "border-gray-300"
                  } border-[1px] w-full items-center`}
                >
                  <img src={SalesPlusLogo} className="w-28" alt="" />
                  <IoIosArrowForward size={20} />
                </div>
                <div
                  onClick={() => handleRoute('daftar')}
                  className={`flex justify-between p-4 cursor-pointer rounded-xl ${
                    current!== "/sales-plus"
                      ? "border-light-primary"
                      : "border-gray-300"
                  } border-[1px] w-full items-center`}
                >
                  <img src={lightLogo} className="w-28 h-[30px]" alt="" />
                  <IoIosArrowForward size={20} />
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
        <img
          src={current === "/sales-plus" ? SalesPlusLogoDark : darkLogo}
          className={`${current === "/sales-plus" ? "h-10" : "h-40"} w-36`}
          alt=""
        />
        <div>
          <IoIosArrowDown
            size={25}
            color="white"
            className="cursor-pointer"
            onClick={handleDropdownToggle}
            
          />
          {isDropdownOpen && (
            <div className="bg-[#282828] p-2 gap-2 flex flex-col rounded-md shadow-xl absolute z-[99] left-[0px] top-[77px] w-[17rem]">
              <div
                onClick={() => handleRoute('sales-plus')}
                className={`flex justify-between p-4 cursor-pointer rounded-xl ${
                 current === "/sales-plus"
                    ? "border-light-primary border-2"
                    : "border-gray-300"
                } border-[1px] w-full items-center`}
              >
                <img src={SalesPlusLogoDark} className="w-28" alt="" />
                <IoIosArrowForward size={20} color="white" />
              </div>
              <div
                onClick={() => handleRoute('daftar')}
                className={`flex justify-between p-4 cursor-pointer rounded-xl ${
                  current!== "/sales-plus"
                    ? "border-light-primary border-2"
                    : "border-gray-300"
                } border-[1px] w-full items-center`}
              >
                <img src={darkLogo} className="w-28 h-[30px]" alt="" />
                <IoIosArrowForward size={20} color="white" />
              </div>
            </div>
          )}
        </div>
      </>
      )}
    </div>
  );
};

export default SidebarLogo;
