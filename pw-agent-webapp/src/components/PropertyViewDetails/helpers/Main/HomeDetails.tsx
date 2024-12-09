import DetailsDropdown from "./DetailsDropdown";

const HomeDetails = () => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <h2 className="text-[1.44rem] font-semibold text-[#1D2939]">Home</h2>
      <DetailsDropdown title="Flat" />
      <DetailsDropdown title="Upper Portion" />
      <DetailsDropdown title="Residential Plot" />
    </div>
  );
};

export default HomeDetails;
