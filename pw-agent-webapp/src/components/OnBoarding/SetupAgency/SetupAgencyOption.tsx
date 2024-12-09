import { Checkbox } from "antd";

type Props = {
  img: string;
  title: string;
  desc: string;
  isSelected: boolean;
  onClick: () => void;
};

const SetupAgencyOption = ({
  img,
  title,
  desc,
  isSelected,
  onClick,
}: Props) => {
  return (
    <div
      className={`flex items-center border-2 ${
        isSelected ? "border-[#2E90FA]" : "border-borderColor"
      }  rounded-lg justify-between pr-4 cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex gap-3 items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4 className="text-[#292D35] text-[1.1875rem] font-medium">
            {title}
          </h4>
          <p className="text-base text-[#667085]">{desc}</p>
        </div>
      </div>
      <div>
        <Checkbox checked={isSelected} className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default SetupAgencyOption;
