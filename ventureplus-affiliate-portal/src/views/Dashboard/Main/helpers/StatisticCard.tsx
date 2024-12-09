
interface Props {
  bgColor: string;
  icon: string;
  title: string;
  bgImg: string;
  count: number;
}

const StatisticCard = ({ bgColor, icon, title, bgImg, count }: Props) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`relative rounded-lg h-[150px] border w-[32%]`}
    >
      <div className="flex gap-2 items-center m-4">
        <div className="w-10 h-10 rounded-lg bg-[white] bg-opacity-[13%] p-1 flex items-center justify-center">
          <img src={icon} alt="" />
        </div>
        <p className="text-foreground font-semibold text-lg">{title}</p>
      </div>

      <p className="text-[white] font-bold text-4xl ml-4">{count}</p>
      <img src={bgImg} alt="" className="absolute right-0 bottom-0" />
    </div>
  );
};

export default StatisticCard;
