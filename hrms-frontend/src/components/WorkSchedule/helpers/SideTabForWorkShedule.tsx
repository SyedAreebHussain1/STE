type Props = {
  active?: boolean;
  onclick: (e: any) => void;
  id: number;
  data: any;
};

const SideTabForWorkShedule = ({
  active = false,
  onclick,
  id,
  data,
}: Props) => {
  const classWhenCleck = active
    ? "border-[#3E54AC] dark:border-dark-secondary dark:text-[#B7C8F6] text-primary"
    : "text-black border-[#EAECF0] dark:text-[#e5e7eb]";

  const bgClassWhenCleck = active
    ? "bg-white dark:bg-dark-grayprimary "
    : "bg-white  dark:bg-dark-grayprimary";
  return (
    <div
      onClick={() => onclick(data)}
      key={id}
      className={`p-[20px]  border rounded-[10px]   ${bgClassWhenCleck}  ${classWhenCleck}`}
    >
      <div>
        <h1 className="text-[1.1rem] font-medium">{data?.title}</h1>
        <div className=" mt-[10px]">
          {data?.isSetDefault && (
            <span
              className={`border  rounded-[15px]  px-[5px] py-[2px]  ${classWhenCleck} `}
            >
              Default
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideTabForWorkShedule;
