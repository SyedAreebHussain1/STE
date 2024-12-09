
const LatestInsights = ({
  cardArr,
}: {
  cardArr: { heading: string; image: string; title: string; by: string }[];
}) => {
  return (
    <div className="w-full flex justify-center bg-[#016A70]">
      <div className=" relative py-[60px] px-[30px] xs:w-full lg:w-[1300px] gap-[80px] overflow-hidden">
        <h1 className=" heading-xl font-semibold text-[#F2F4F8]">
          Latest Insights & Resources
        </h1>
        <div className="mt-[50px] flex w-full justify-between">
          {cardArr?.map((item, index) => (
            <Card
              heading={item?.heading}
              image={item?.image}
              title={item?.title}
              by={item?.by}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LatestInsights;
const Card = ({
  heading,
  image,
  title,
  by,
}: {
  heading: string;
  image: string;
  title: string;
  by: string;
}) => {
  return (
    <div className="w-[32%]   h-[650px] flex flex-col ">
      <div className="w-full justify-center flex h-[470px] ">
        <div className="h-[470px]">
          <img src={image} className="w-full h-full" />
        </div>
      </div>
      <div className="w-full h-full px-[15px] mt-[15px] ">
        <p className="bg-[#ffffff33] text-[#F8FAFC] text-[16px] px-[10px] py-[5px] w-max rounded-2xl ">
          {title}
        </p>
        <h1 className="heading-xs text-[#F2F4F8] font-semibold mt-[20px]">
          {heading}
        </h1>
        <h2 className="text-[18px] text-[#E3E7EF] font-medium mt-[10px]">
          {by}
        </h2>
      </div>
    </div>
  );
};
