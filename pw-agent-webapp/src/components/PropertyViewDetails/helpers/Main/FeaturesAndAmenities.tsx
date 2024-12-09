import TickIcon from "./../../../../assets/check-icon.svg";
type Props = { data: any };

const FeaturesAndAmenities = (props: Props) => {
  return (
    <div className="mb-8">
      <h4 className="text-[#475467] text-[19.2px] font-medium mb-5">
        Feature & Amenities
      </h4>
      <div className="grid grid-cols-4 gap-3">
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">
            24/7 Water
          </span>
        </div>
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">24/7 Gas</span>
        </div>
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">
            24/7 Electricity
          </span>
        </div>
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">
            Parking Garage
          </span>
        </div>
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">
            Nearby Shopping Mall
          </span>
        </div>
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">Garage</span>
        </div>
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">Flooring</span>
        </div>
        <div className="flex items-center gap-4">
          <img src={TickIcon} alt="" />
          <span className="text-[#1D2939] font-medium text-base">
            Parking Garage
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndAmenities;
