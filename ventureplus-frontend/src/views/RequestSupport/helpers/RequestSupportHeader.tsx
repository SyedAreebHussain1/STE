import { useNavigate } from "react-router-dom";
import { leftArrowGrayIcon } from "../../../assets/website";
interface Props {}

const RequestSupportHeader = (props: Props) => {
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
      <h1 className="font-semibold text-body heading-s mt-5">
        Need Assistance? We're Here to Help!
      </h1>
      <p className="text-para body-s">
        If you have any questions or need help with your business plan, reach
        out to our support team for quick assistance.
      </p>
    </div>
  );
};

export default RequestSupportHeader;
