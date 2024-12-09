import DetailsDropdown from "./DetailsDropdown";

type Props = {};

const CommercialDetails = (props: Props) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <h2 className="text-[1.44rem] font-semibold text-[#1D2939]">
        Commercial
      </h2>
      <DetailsDropdown title="Office" />
    </div>
  );
};

export default CommercialDetails;
