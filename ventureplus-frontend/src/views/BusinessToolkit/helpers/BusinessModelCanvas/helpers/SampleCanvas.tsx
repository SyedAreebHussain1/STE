import { useNavigate } from "react-router-dom";
import { canvas } from "../../../../../assets/BusinessToolkit";
import RoundedButton from "../../../../../components/button/RoundedButton";
import ColumnContainerForPDF from "./ColumnContainerForPDF";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";
import { rightArrowGreenIcon } from "../../../../../assets";
import {
  briefcaseBgImg,
  infoIcon,
} from "../../../../../assets/filledPlanSetupAssets";
import { Col } from "antd";

interface Props {}

const SampleCanvas = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="mt-4">
      {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-body font-semibold heading-m">Sample Canvas</h1>
        <RoundedButton
          title={"Add Yours Now"}
          sm
          type="primary"
          onClick={() => navigate("/business-toolkit/model-canvas/download")}
        />
      </div> */}
      <Col lg={24} sm={24} md={24}>
        <div className="mb-5">
          <img
            src={briefcaseBgImg}
            alt=""
            className="absolute top-0 right-0 h-[145px]"
          />
          <div className="h-full flex flex-col relative">
            <div className="bg-[#FFA800] bg-opacity-5 rounded-xl flex justify-between items-start p-4 ">
              <div className=" flex gap-2 items-start p-4 justify-center mt-4">
                <img src={infoIcon} alt="" className=" h-[60px]" />
                <p className="font-normal text-[#212838] text-[33px] text-center">
                  To generate your Business Model Canvas, please complete your
                  business plan first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>

      <img src={canvas} alt="" className="w-full" />
    </div>
  );
};

export default SampleCanvas;
