import { AboutUsBgImage } from "../../../../../assets/website";

const AboutVenturePlus = () => {
  return (
    <div className="w-full h-[300px] md:h-[500px] flex justify-center items-center relative bg-[#cce1e280]">
      <div
        className="absolute w-full h-full "
        style={{
          backgroundImage: `url(${AboutUsBgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "fit",
        }}
      ></div>
      <div className="w-full max-w-[520px] px-[10px]">
        <h1 className="text-[36px] md:text-[45.78px] md:keading-[24.22px] font-bold text-center !leading-[60px]">
          About <span className="text-[#016A70]">Venture</span>Plus
        </h1>
        <p className="text-[15px] md:text-[16px] leading-6 text-[#212838] text-center">
          We believe that innovation fuels growth, collaboration sparks success,
          and every idea has the potential to change the world.
        </p>
      </div>
    </div>
  );
};
export default AboutVenturePlus;
