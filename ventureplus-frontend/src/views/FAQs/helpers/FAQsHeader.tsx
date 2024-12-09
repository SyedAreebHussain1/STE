import { useNavigate } from "react-router-dom";
import { leftArrowGrayIcon } from "../../../assets/website";

const FAQsHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        <img src={leftArrowGrayIcon} alt="" />
        <h1 className="text-para body-s font-medium">Back to home</h1>
      </div>
      <h1 className="font-semibold text-body heading-s">
        Frequently asked questions
      </h1>
      <p className="text-para body-s">
        Explore Our Frequently Asked Questions for Quick Answers and Insights.
      </p>
    </div>
  );
};

export default FAQsHeader;
