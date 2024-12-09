import { useNavigate } from "react-router-dom";
import RoundedButton from "../button/RoundedButton";

type Props = {};

const PageNotFound = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center mt-6 flex-col gap-5">
      <p className="text-para heading-m font-semibold">Page Not Found</p>
      <RoundedButton
        title={"Go Back To Home page"}
        onClick={() => navigate("/dashboard")}
      />
    </div>
  );
};

export default PageNotFound;
