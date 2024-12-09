import { RiBallPenLine } from "react-icons/ri";
import Logo from "../../../assets/daftarPlusWebsiteLogo.svg";
const NavBar = () => {
  return (
    <div className="border-y-[1px] border-[#6E6E6E] w-full mt-[10px] py-[11px] flex justify-between items-center">
      <div>
        <img
          className="w-[196.53px] h-[51.1px] "
          src={Logo}
          alt="website logo"
        />
      </div>
      <div className="text-[#FFFFFF] text-[1rem] font-semibold flex gap-[64px] pl-[100px]">
        <span>PRODUCT</span>
        <span>PRICING</span>
        <span>CONTACT US</span>
      </div>
      <div className="bg-[#FFFFFF] rounded-full flex justify-center items-center gap-[8px]">
        <h1 className="text-[1rem] font-semibold pl-[21px] py-[11px] ">
          SIGN UP/ LOG IN
        </h1>
        <div className="border-[#1E1E1E] border-[.5px] rounded-full p-[8px] mr-[4.5px]">
          <RiBallPenLine fontSize={18} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
