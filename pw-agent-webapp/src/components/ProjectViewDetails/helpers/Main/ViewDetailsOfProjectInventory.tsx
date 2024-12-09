import DetailsDropdown from "./DetailsDropdown";

type Props = { data: any; title: string };

const ViewDetailsOfProjectInventory = ({ data, title }: Props) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <h2 className="text-[1.44rem] font-semibold text-[#1D2939]">{title}</h2>

      {data?.map((val: any, i: number) => (
        <DetailsDropdown title={val?.projectSubType?.title} data={val} />
      ))}
    </div>
  );
};

export default ViewDetailsOfProjectInventory;
