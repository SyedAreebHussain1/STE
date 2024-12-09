import { FeatureBg } from "../../../../../assets/website";

const DiscoverTheFeature = () => {
  return (
    <div className="flex justify-center w-full featureDiscoverTheFeature" >
      <div className="flex justify-between p-[20px] py-[40px] lg:p-[100px] lg:py-[40px]  !pb-[0]  w-full lg:w-[1300px] ">
        <div className="w-[100%] pt-[20px] pl-[20px] flex justify-between flex-col ">
          <div className="flex flex-col lg:items-start">
            <h1 className="text-[30px] md:text-[45.78px] md:leading-[24.22px] leading-[33px] font-bold w-full xs:text-center lg:text-left">
              Discover what we offer
            </h1>
            <p className="text-[#4A5366] mt-[20px] text-[15px] md:text-[20px]  lg:text-left">
              We believe that vision inspires action, community fosters growth,
              and every entrepreneur has the power to make a difference!
            </p>
          </div>
          <div className="flex mt-[50px] justify-start  ">
            <div className="w-[100%] md:w-[200px] px-[12px] md:px-[44px] py-[10px] md:py-[25px] bg-[#016a701f]">
              <h1 className="text-[22px] md:text-[45.78px] md:leading-[24px]  text-[#014043] text-center">
                400+
              </h1>
              <p className="text-[12px] md:text-[16px] text-center leading-[20px] mt-0 md:mt-[15px]">
                Company Subscribed
              </p>
            </div>
            <div className="w-[100%] md:w-[200px] px-[12px] md:px-[44px] py-[10px] md:py-[25px] bg-[#01555A] text-[#fff]">
              <h1 className="text-[22px] md:text-[45.78px] md:leading-[24px] text-center">
                40+
              </h1>
              <p className="text-[12px] md:text-[16px] text-center leading-[20px] mt-0 md:mt-[15px]">
                Business Created
              </p>
            </div>
            <div className="w-[100%] md:w-[200px] px-[12px] md:px-[44px] py-[10px] md:py-[25px] bg-[#016a701f]">
              <h1 className="text-[22px] md:text-[45.78px] md:leading-[24px] text-[#014043] text-center">
                300+
              </h1>
              <p className="text-[12px] md:text-[16px] text-center leading-[20px] mt-0 md:mt-[15px]">
                Business Plan Generated
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-[70%] mb-[0px] pl-[0px] hidden lg:block">
        </div> */}
        <img src={FeatureBg} className="ml-[80px] h-[300px] hidden lg:block" />
      </div>
    </div>
  );
};
export default DiscoverTheFeature;
