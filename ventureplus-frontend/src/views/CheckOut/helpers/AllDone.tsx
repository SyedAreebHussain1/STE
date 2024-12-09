import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckoutGif } from "../../../assets/checkOutAssets";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { subPlanBg } from "../../../assets/subscriptionAssets";

const AllDone = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${subPlanBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
      className="w-full h-full"
    >
      <div className="flex items-center justify-center  lg:h-[87vh] md:h-[92vh] h-[87vh]">
        <div className="flex flex-col gap-3 items-center">
          <div>
            {/* <img src={CheckoutGif} alt="Punch" className="" /> */}
            <div className="flex items-center justify-center bg-[#016A70] rounded-full w-[100px] h-[100px] mb-[30px]">
              <FiCheck className="text-[white] text-[60px]" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[36px] font-bold"> Payment Successful! 🎉</h1>
            <p className="text-[23px] text-wrap font-normal text-[#212838]">
              Thank you for your payment. Your transaction has been completed
              successfully.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              className="bg-[#016A70] text-[#FFFFFF] px-[30px] py-[20px] rounded-3xl font-bold flex items-center"
              onClick={() => navigate("/dashboard")}
            >
              <p>Go To Dashboard </p>
              <FaArrowRightLong className={"text-[15px] mb-[2px] ml-[10px]"} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDone;
