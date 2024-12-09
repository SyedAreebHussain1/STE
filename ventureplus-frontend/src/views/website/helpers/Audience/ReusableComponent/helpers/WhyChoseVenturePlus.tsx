import { WhyChoseVentureImage } from "../../../../../../assets/website";

const WhyChoseVenturePlus = ({
  cardArr,
}: {
  cardArr: { heading: string; image: string }[];
}) => {
  return (
    <div className="w-full flex justify-center bg-[#fff]">
      <div className=" relative py-[60px] px-[30px] xs:w-full lg:w-[1300px] gap-[80px] overflow-hidden">
        <h1 className="text-[#212838] text-[23px] md:text-[45.78px] font-bold">
          Why chose VenturePlus?
        </h1>
        <div className="mt-[50px] flex w-full flex-col md:flex-row justify-between gap-5 md:gap-0">
          {cardArr?.map((item, index) => (
            <Card heading={item?.heading} image={item?.image} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChoseVenturePlus;
const Card = ({ heading, image }: { heading: string; image: string }) => {
  return (
    <div className="w-full md:w-[32%] border-[1px] border-[#4A5366] rounded-[40px] rounded-bl-[0px] h-[300px] md:h-[400px] flex flex-col">
      <div className="w-full justify-center flex h-full items-center">
        <img src={image} className="w-1/3 " />
      </div>
      <div className="w-full h-[70%] md:h-[50%] px-[30px] ">
        <h1 className="text-[20px] md:text-[29px] text-[#212838] text-center">
          {heading}
        </h1>
      </div>
    </div>
  );
};
