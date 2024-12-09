import { FaArrowRight } from "react-icons/fa";
import "./style.css";
import { GoArrowRight } from "react-icons/go";
import { smartFutureImage } from "../../../../../assets/website";
import { useNavigate } from "react-router-dom";

const SmartFuture = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[20px] md:mt-[50px] flex justify-center ">
      <div className="bg-[#016A70] h-full md:h-[320px] w-full md:w-[1200px] rounded-none md:rounded-3xl relative flex justify-center px-[20px] md:px-0 pb-[30px] md:pb-0 ">
        <img
          className="hidden md:block absolute left-0 h-full imageRotateInSmartFuture"
          src={smartFutureImage}
        />
        <img
          className="hidden md:block absolute right-0 h-full "
          src={smartFutureImage}
        />
        <div className="w-[500px] flex flex-col items-start md:items-center ">
          <h1 className="text-[26px] md:text-[40px] text-[white]  font-semibold text-left md:text-center leading-9 md:leading-[48px] mt-[60px]">
            <span className="font-bold">Venture Plus</span> is ready to be the
            co-pilot for your business success!{" "}
          </h1>
          <button
            className="mt-[20px] custombuttonSmartFuture text-[white] rounded-3xl py-[5px] px-[20px] border-[1px] border-[white] text-[16px] flex items-center w-[180px]"
            onClick={() => navigate("/login")}
          >
            <p className="relative z-[1] custombuttonSmartFutureP font-semibold">
              START NOW
            </p>
            <div className="bg-[white] custombuttonSmartFutureDiv p-[6px] rounded-full text-[#016A70] text-[18px] relative z-[1] ml-[auto]">
              <GoArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SmartFuture;
