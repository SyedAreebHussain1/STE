import { useNavigate } from "react-router-dom";
import { bannerBg } from "../../../../../assets/businessSettingsAssets";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full items-center ">

      <div className="flex flex-col text-black">
        <button className="flex gap-3 items-center" onClick={()=>navigate("/dashboard")}>
          <span className="text-2xl">&larr;</span>
          <h1 className="text-lg">Back to home</h1>
        </button>

        <h1 className="font-medium heading-l ">Business Model Canvas</h1>
        <p className="font-medium btn-text">
          Your Comprehensive Resource for Strategic Planning and Growth
        </p>
      </div>
    </div>
  );
};

export default Banner;
