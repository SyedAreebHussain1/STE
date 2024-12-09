import {
  nextGenBgWebsite,
  NextGenBusinessPlanImage,
} from "../../../../../assets/website";

const NextGenBusinessPlan = () => {
  return (
    <div
      className="pt-[20px] bg-[#e2ffed99] w-full flex justify-center"
      style={{
        backgroundImage: `url(${nextGenBgWebsite})`,
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full lg:w-[1300px] py-[50px] px-[20px] flex flex-col md:flex-row gap-10 ">
        <div className="w-full">
          <h1 className="text-[#666658] border-[#666658] text-center border-[1px] px-[15px] py-[3px] text-[22.7px] w-max rounded-3xl">
            Features
          </h1>
          <div className="mt-[20px]">
            <h1 className="text-[30px] leading-9 md:text-[45.78px] text-[#016A70] font-bold md:!leading-[55px]">
              Next-Gen Business <br /> Planning
            </h1>
            <p className="text-[#4A5366] text-[15px] md:text-[17px] leading-[19.53px] mt-[20px]">
              From navigating the complexities of business planning to a suite
              of entrepreneur tools we’re here to help you make informed
              decisions, mitigate risks, and steer your venture to success.
            </p>
            <br></br>
          </div>
        </div>
        <div className="w-full">
          <img src={NextGenBusinessPlanImage} />
        </div>
      </div>
    </div>
  );
};
export default NextGenBusinessPlan;
