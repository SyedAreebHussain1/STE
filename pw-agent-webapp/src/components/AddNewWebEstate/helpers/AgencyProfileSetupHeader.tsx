import { Button } from "antd";
import RightIcon from "./../../../assets/right-icon.svg";
import AgencyProfileBg from "./../../../assets/agency-profile-bg.svg";
import { useNavigate } from "react-router-dom";
type Props = {};

const AgencyProfileSetupHeader = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#27A3A30D] h-[161px] flex justify-between p-6 relative">
      <div className="flex flex-col gap-4">
        <h2 className="max-w-[471px] text-[#344054] text-[1.44rem] font-semibold leading-[2.16rem]">
          To Make your Website better complete your Agency Profile.
        </h2>
        <Button
          type="link"
          className="text-primary text-[1.2rem] font-medium flex items-center gap-2 p-0"
          onClick={() => {
            navigate("/agency-profile");
          }}
        >
          <span>Agency Profile</span>{" "}
          <span>
            <img src={RightIcon} alt="" />
          </span>
        </Button>
      </div>
      <div className="absolute top-0 right-0 lg:block md:hidden hidden">
        <img src={AgencyProfileBg} alt="" />
      </div>
    </div>
  );
};

export default AgencyProfileSetupHeader;
