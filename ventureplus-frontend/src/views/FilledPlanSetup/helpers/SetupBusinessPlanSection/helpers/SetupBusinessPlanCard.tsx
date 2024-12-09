import { Col } from "antd";
import { rightArrowGrayIcon, rightArrowIcon } from "../../../../../assets";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";
import { CardDataI } from "./SetupBusinessPlanCards";
import { useNavigate } from "react-router-dom";

const SetupBusinessPlanCard = ({
  title,
  description,
  btnTitle,
  link,
  bgImg,
  unlockChapters
}: CardDataI) => {
  const navigate = useNavigate();
  return (
    <Col
      sm={24}
      className="relative !p-4 bg-[#fff] rounded-lg ml-0 lg:ml-5 shadow-lg"
    >
      <img src={bgImg} alt="" className="absolute top-0 right-0 h-[145px]" />
      <div className="h-full flex flex-col w-[50%]">
        <h1 className="text-primary font-bold text-lg">{title}</h1>
        <p className="text-title mb-6 body-s">{description}</p>
        <div className="flex justify-start items-end w-full flex-1">
          <ButtonWithSvg
            title={btnTitle}
            disabled={unlockChapters}
            type="primary"
            sm
            icon={ unlockChapters ? rightArrowGrayIcon : rightArrowIcon}
            onClick={() => {
              if (link) navigate(link);
            }}
          />
        </div>
      </div>
    </Col>
  );
};

export default SetupBusinessPlanCard;
