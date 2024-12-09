import { PricingBackgroundImage } from "../../../../../assets/website";

const AffordablePricingPlan = () => {
  return (
    <div className="flex justify-center w-full affordablePlan ">
      <div className="flex justify-between p-[0]  px-[20px]  w-full affordablePlan max-w-[1300px] lg:w-full overflow-hidden rounded-lg">
        <div className="w-[100%] pt-[20px] mt-[30px]   flex justify-between flex-col">
          <div className="flex flex-col items-start ">
            <h1 className="text-[29px] md:text-[48px] leading-[38px] md:leading-[63px] font-bold w-full xs:text-center lg:text-left text-[#002A2D]">
              Affordable, Clear, and Flexible Pricing
            </h1>
            <p className="text-[#4A5366] mt-[5px] text-[15px] md:text-[20px]  text-left leading-[25px] md:leading-[34.5px]">
              Whether you're an aspiring entrepreneur, a growing startup, or an
              established business, we have the right plan for you. Enjoy
              straightforward pricing designed to fit your needs, with no
              surprises or hidden fees.
            </p>
          </div>
          <div className="flex mt-[50px] justify-center  ">
            <div className="w-full md:w-[200px] px-[12px] md:px-[44px]  py-[10px] md:py-[25px]] bg-[#016a701f]">
              <h1 className="text-[22px] md:text-[45.78px] md:leading-[24px] mt-[5px] md:mt-[15px] text-[#014043] text-center">
                400+
              </h1>
              <p className="text-[12px] md:text-[16px] text-center leading-[20px] mt-0 md:mt-[15px]">
                Pitch Decks Created
              </p>
            </div>
            <div className="w-full md:w-[200px] px-[12px] md:px-[44px]  py-[10px] md:py-[25px]] bg-[#01555A] text-[#fff]">
              <h1 className="text-[22px] md:text-[45.78px] md:leading-[24px] mt-[5px] md:mt-[15px]  text-center">
                1000+
              </h1>
              <p className="text-[12px] md:text-[16px] text-center leading-[20px] mt-0 md:mt-[15px]">
                Users & Entreprenuers
              </p>
            </div>
            <div className="w-full md:w-[200px] px-[12px] md:px-[44px]  py-[10px] md:py-[25px]] bg-[#016a701f]">
              <h1 className="text-[22px] md:text-[45.78px] md:leading-[24px] mt-[5px] md:mt-[15px] text-[#014043] text-center">
                300+
              </h1>
              <p className="text-[12px] md:text-[16px] text-center leading-[20px] mt-0 md:mt-[15px]">
                Business Plans Generated
              </p>
            </div>
          </div>
        </div>
        <div className="w-[80%] mb-[10px] pl-[100px] hidden lg:block">
          <img src={PricingBackgroundImage} className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default AffordablePricingPlan;
