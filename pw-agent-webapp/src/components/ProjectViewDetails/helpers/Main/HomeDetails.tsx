import DetailsDropdown from "./DetailsDropdown";

type Props = { data: any };

const HomeDetails = ({ data }: Props) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <h2 className="text-[1.44rem] font-semibold text-[#1D2939]">Home</h2>
    </div>
  );
};

export default HomeDetails;
