import { CardBgImg } from "../../../../../assets/filledPlanSetupAssets";

interface BusinessPlanCardI {
  data: any;
  index: number;
  locked: boolean;
  chapters: any[];
}

const CardFront = ({ data, locked }: BusinessPlanCardI) => {
  return (
    <div className={`w-full h-[462px] bg-primary text-[#fff] rounded-xl`}>
      <div className="w-full h-full relative flex items-start flex-col">
        <div className="absolute top-0 left-0">
          <img
            src={CardBgImg}
            alt="bgimage"
            className="w-full h-[462px] bg-cover opacity-[20%]"
          />
        </div>

        <div className=" z-[10] bg-[#fff] flex gap-2 items-center p-4 mt-12">
          <h1 className="text-title leading-6 font-bold text-lg tracking-[10px]">
            CHAPTER
          </h1>{" "}
          <span className="text-primary font-bold text-lg">
            {data?.chapterNo}
          </span>
        </div>

        <div className="pt-[40px] pl-[25px] pr-[40px] z-[10]">
          <p className="text-[36px] font-bold text-wrap w-[65%] leading-[50.4px]">
            {data?.title}
          </p>
          <p className="text-[#fff] paragraph">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};
export default CardFront;
