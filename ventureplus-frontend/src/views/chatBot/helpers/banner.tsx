import { useNavigate } from "react-router-dom";
import {
  chatbannerImage,
  chatupdateImage,
} from "../../../assets/chatbotAssets";

const ChatBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full items-center justify-between bg-[#F4F3FF] border-[#D9D6FE] border-[1px] rounded-lg px-5 py-4">
      <div className="flex gap-2 items-center">
        <img src={chatbannerImage} alt="banner image" />
        <h1 className="text-[#212838] text-[20px] font-semibold">
          Upgrade to Premium for Full Chat Access!
        </h1>
      </div>
      <button
        className="flex gap-1 text-[15px] font-medium text-[#fff] items-center bg-[#7A5AF8] px-[20px] py-[8px] rounded-full"
        onClick={() => navigate("/subscription-plan")}
      >
        <img src={chatupdateImage} alt="button image" />
        <h2>Upgrade Now</h2>
      </button>
    </div>
  );
};
export default ChatBanner;
