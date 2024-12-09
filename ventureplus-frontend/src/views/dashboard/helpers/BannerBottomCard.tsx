import { useNavigate } from "react-router-dom";
import SvgCircleButton from "../../../components/button/SvgCircleButton";

export interface BannerBottomCardI {
  title: string;
  description: string;
  icon: string;
  bgImg: string;
  link?: string;
}
const BannerBottomCard = ({
  title,
  description,
  icon,
  bgImg,
  link,
}: BannerBottomCardI) => {
  const navigate = useNavigate();
  return (
    <div
      className={`sm:w-[50%] w-full sm:min-h-[239px] lg:min-h-[187px] xl:min-h-[161px] rounded-[15px] p-[24px] relative bg-primary bg-opacity-[7%]`}
      onClick={() => {
        link && navigate(link);
      }}
    >
      {title === "Pitch Decks" ? (
        <div className="absolute right-[15px] bg-primary bg-opacity-10 text-primary justify-center items-center sm:p-3 p-1 rounded-full cursor-not-allowed font-semibold">
          <button className="cursor-not-allowed">Coming Soon</button>
        </div>
      ) : (
        <div className="absolute right-[15px] bg-primary justify-center items-center sm:p-3 p-2 rounded-full cursor-pointer shadow-[0px_3.56px_8.62px_0px_#002A2D29]">
          <img src={icon} alt="" />
        </div>
      )}

      <img src={bgImg} alt="" className="absolute bottom-0 right-0" />

      <div className="w-[80%]">
        <h1
          className={`heading-m font-semibold leading-[25.02px] text-body mb-[10px]`}
        >
          {title}
        </h1>

        <p className={`body-s leading-[26px] font-medium text-para`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default BannerBottomCard;
