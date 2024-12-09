import { Button as Btn } from "antd";
import WebEstateIll from "./../../../assets/webestate-ill.svg";
import { useNavigate } from "react-router-dom";
import CopyImg from "./../../../assets/copy-icon.svg";
import Button from "../../../helpers/inputs/Button";
import { useSelector } from "react-redux";
import { errorMessage, successMessage } from "../../../utils/message";

const WebEstateAddSection = () => {
  const navigate = useNavigate();
  const getProfile = useSelector((state: any) => state.getProfile);
  const handleClick = (url: string) => {
    const text = url;
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    const successFull = document.execCommand("copy");
    textField.remove();
    if (successFull) {
      successMessage("Text Copied");
    } else {
      errorMessage("Try Again");
    }
  };

  const websiteUrl = `${import.meta.env.VITE_WEBESTATE_URL}/${getProfile?.data?.profile?.agency?.agencyName}/${getProfile?.data?.profile?.agency?.id}`;
  return (
    <div className="bg-white p-[1.125rem] rounded-[.75rem] gap-6">
      <div className="border border-borderColor py-4 px-3 rounded-lg mb-4">
        <h4 className="text-base font-medium mb-2">Website Link</h4>
        <div className="flex items-center gap-2">
          <div className="border flex-grow border-[#344054] border-dashed rounded-lg overflow-hidden px-4 h-[48px] flex items-center">
            <p className="text-base font-medium text-[#344054] flex-shrink-0">
              {websiteUrl}
            </p>
          </div>
          <Btn
            className="flex items-center gap-[.375rem] h-[48px] w-[105px] justify-center"
            onClick={() => handleClick(websiteUrl)}
          >
            <span>
              <img src={CopyImg} alt="" />
            </span>
            <span>Copy</span>
          </Btn>
        </div>
      </div>
      <div className="flex items-center gap-[.625rem]">
        <Button
          label={"Edit Website"}
          variant="filled"
          className="flex-1"
          onClick={() => navigate("/webestate/add-new")}
        />
        <Button
          label={"View Live"}
          variant="outlined"
          className="flex-1"
          onClick={() => {
            window.open(websiteUrl, "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default WebEstateAddSection;

{
  /* <div>
        <img src={WebEstateIll} alt="" />
      </div>
      <p className="text-center font-medium text-base eading-[1.5rem] text-[#344054]">
        Launch Your Real Estate Website in Just a Few Clicks! Effortlessly
        showcase properties and attract clients with our intuitive platform
      </p>
      <div>
        <Button
          className="h-[3rem] flex items-center gap-2 text-base font-medium text-[#344054]"
          onClick={() => navigate("/webestate/add-new")}
        >
          <span>+</span>
          <span>Add New Website</span>
        </Button>
      </div> */
}
