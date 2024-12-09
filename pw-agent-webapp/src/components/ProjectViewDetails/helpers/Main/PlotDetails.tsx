import DetailsDropdown from "./DetailsDropdown";

type Props = {};

const PlotDetails = (props: Props) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <h2 className="text-[1.44rem] font-semibold text-[#1D2939]">Plots</h2>
      <DetailsDropdown title="Residential" />
      <DetailsDropdown title="Commercial" />
      <DetailsDropdown title="Industrial" />
    </div>
  );
};

export default PlotDetails;
