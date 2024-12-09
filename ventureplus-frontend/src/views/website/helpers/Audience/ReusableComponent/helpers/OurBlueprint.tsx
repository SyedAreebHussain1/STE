import { OurBlueprintBgImage } from "../../../../../../assets/website";

const OurBlueprint = ({
  Tagline,
  StatsBoxes,
  AudienceImage,
}: {
  Tagline: string;
  StatsBoxes: { percentage?: string; title: string }[];
  AudienceImage: any;
}) => {
  return (
    <div className="w-full flex justify-center bg-[#016A70]">
      <div className="flex  justify-center relative py-[50px] px-[30px] xs:w-full lg:w-[1300px] gap-[80px] overflow-hidden">
        <div className="text-[50px] leading-[40px] md:leading-[70px] w-full md:w-[80%] h-full flex flex-col">
          <div className="h-max block text-[#F2F4F8] font-medium text-[30px] md:text-[55px]">
            <span className="inline-flex w-max h-max mr-[10px]">
              <span className="w-[40px] h-[40px] rounded-full border-[2px] border-[#fff] bg-[#fff]"></span>
              <span className="w-[40px] h-[40px] rounded-full border-[2px] border-[#fff] "></span>
            </span>
            {Tagline}
            <span className="inline-flex  h-[40px] ml-[10px] w-[90px] relative">
              <span className="w-[40px] h-[40px] rounded-full border-[2px] border-[#fff]  absolute top-0 left-0"></span>
              <span className="w-[40px] h-[40px] rounded-full border-[2px] border-[#CCCCB1] absolute  top-0 left-1/2 -translate-x-1/2 bg-[#CCCCB1]"></span>
              <span className="w-[40px] h-[40px] rounded-full border-[2px] border-[#fff] absolute bg-[#fff] top-0 right-0"></span>
            </span>
          </div>
          <div className="h-full flex items-end w-full">
            <div className="flex items-center gap-1">
              <button className="text-[#212838] text-[18px] leading-[25px] font-semibold bg-[#FFFFFF] px-[28px] py-[14px] rounded-3xl   h-max ">
                Get Started
              </button>
              <button className="w-[50px] h-[50px] border-[1px] border-[#F2F4F8] rounded-full"></button>
            </div>
          </div>
        </div>
        <div className="w-full  hidden md:flex  flex-col items-center">
          <div className="lg:w-[500px]">
            <img src={AudienceImage} />
          </div>
          <div className="w-full mt-[50px] flex justify-center gap-3">
            {StatsBoxes?.map((item) => (
              <button className="text-[#212838] text-[16px] font-medium bg-[#FFFFFF] px-[24px] py-[12px] rounded-3xl flex items-center">
                {item?.percentage ? (
                  <span className="text-[18px] font-bold mr-[8px]">
                    {item?.percentage}
                  </span>
                ) : null}
                <span>{item?.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurBlueprint;
