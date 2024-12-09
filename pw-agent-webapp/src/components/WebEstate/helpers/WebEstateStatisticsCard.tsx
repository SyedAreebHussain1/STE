export type ItemType = {
  item: {
    title: string;
    value: number;
    icon: string;
  };
};
const WebEstateStatisticsCard = ({ item }: ItemType) => {
  return (
    <div className="bg-[#ffffff] p-[15px] rounded-[12px] mb-4">
      <div>
        <h2 className="text-[#667085] text-[1rem] font-medium ">
          {item.title}
        </h2>
      </div>
      <div className="flex justify-between mt-2 items-center">
        <div>
          <p className="text-[1.7281rem]">{item.value}</p>
        </div>
        <div className="bg-[rgb(234,246,246)] p-[10px] rounded-[6px]">
          <img src={item.icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WebEstateStatisticsCard;
