import TickIcon from "./../../../../assets/check-icon.svg";
type Props = { data: any };

const FeaturesAndAmenities = ({ data }: Props) => {
  return (
    <div className="mb-8">
      <h4 className="text-[#475467] text-[19.2px] font-medium mb-5">
        Feature & Amenities
      </h4>
      <div className="grid grid-cols-4 gap-3">
        {data?.plotFeature?.[0]?.accessibleByRoad && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Accessible By Road
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.balloted && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Balloted
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.bounaryLines && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Bounary Lines
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.bounaryWall && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Bounary Wall
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.corner && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">Corner</span>
          </div>
        )}
        {data?.plotFeature?.[0]?.disputed && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Disputed
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.electricity && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              24/7 Electricity
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.file && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">File</span>
          </div>
        )}
        {data?.plotFeature?.[0]?.irrigation && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Irrigation
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.landFertility && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Land Fertility
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.nearByWaterResources && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              NearBy Water Resources
              {data?.plotFeature?.[0]?.nearByWaterResources?.length > 15
                ? `${data?.plotFeature?.[0]?.nearByWaterResources?.substring(
                    0,
                    12
                  )}....`
                : data?.plotFeature?.[0]?.nearByWaterResources}
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.parkFacing && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Park Facing
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.perimeterFencing && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Perimeter Fencing
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.possesion && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Possesion
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.sewerage && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Sewerage
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.suiGas && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              24/7 Gas
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.tubeWells && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Tube Wells
            </span>
          </div>
        )}
        {data?.plotFeature?.[0]?.waterSupply && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              24/7 Water
            </span>
          </div>
        )}
        {data?.feature?.[0]?.buildInYear && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Build In Year
              {data?.feature?.[0]?.buildInYear}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.centralAirConditioning && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Central Air Conditioning
            </span>
          </div>
        )}
        {data?.feature?.[0]?.centralHeating && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Central Heater
            </span>
          </div>
        )}
        {data?.feature?.[0]?.doubleGazedWindow && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Double Glazed Window
            </span>
          </div>
        )}
        {data?.feature?.[0]?.electricityBackup && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Electricity Backup {""}
              {data?.feature?.[0]?.electricityBackup}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.elevators && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Elevators {""}
              {data?.feature?.[0]?.elevators}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.flooring && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Flooring {""}
              {data?.feature?.[0]?.flooring}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.floors && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Floors {data?.feature?.[0]?.floors}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.floorsInBuilding && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Floors In Building {data?.feature?.[0]?.floorsInBuilding}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.furnished && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Furnished
            </span>
          </div>
        )}
        {data?.feature?.[0]?.lift && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">Lift</span>
          </div>
        )}
        {data?.feature?.[0]?.lobbyInBuilding && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Lobby In Building
            </span>
          </div>
        )}
        {data?.feature?.[0]?.numberOfUnit && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Number Of Unit {data?.feature?.[0]?.numberOfUnit}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.otherMainFeatures && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Other Main Features {data?.feature?.[0]?.otherMainFeatures}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.parkingSpaces && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Parking Spaces {data?.feature?.[0]?.parkingSpaces}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.publicParking && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Public Parking
            </span>
          </div>
        )}
        {data?.feature?.[0]?.serviceElevatorsInBuilding && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Service Elevators In Building
            </span>
          </div>
        )}
        {data?.feature?.[0]?.underGroundParking && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Under Ground Parking
            </span>
          </div>
        )}
        {data?.feature?.[0]?.view && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              View {data?.feature?.[0]?.view}
            </span>
          </div>
        )}
        {data?.feature?.[0]?.wasteDispsal && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Waste Dispsal
            </span>
          </div>
        )}
        {data?.healthcareRecreational?.[0]?.jacuzzi && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Jacuzzi
            </span>
          </div>
        )}
        {data?.healthcareRecreational?.[0]?.lawnOrGarden && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Lawn or Garden
            </span>
          </div>
        )}
        {data?.healthcareRecreational?.[0]?.other && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              {data?.healthcareRecreational?.[0]?.other}
            </span>
          </div>
        )}
        {data?.healthcareRecreational?.[0]?.sauna && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">Sauna</span>
          </div>
        )}
        {data?.healthcareRecreational?.[0]?.swimmingPool && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Swimming Pool
            </span>
          </div>
        )}
        {data?.nearbyLocationsAndOtherFacility?.[0]?.distanceFromAirport && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Distance From Airport {""}
              {data?.nearbyLocationsAndOtherFacility?.[0]?.distanceFromAirport}
            </span>
          </div>
        )}
        {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyHospitals && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Nearby Hospitals {""}
              {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyHospitals}
            </span>
          </div>
        )}
        {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyRestaurants && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Nearby Restaurants {""}
              {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyRestaurants}
            </span>
          </div>
        )}
        {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbySchools && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Nearby Schools {""}
              {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbySchools}
            </span>
          </div>
        )}
        {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyShoppingMalls && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Nearby Shopping Malls {""}
              {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyShoppingMalls}
            </span>
          </div>
        )}
        {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyTransport && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Nearby Transport {""}
              {data?.nearbyLocationsAndOtherFacility?.[0]?.nearbyTransport}
            </span>
          </div>
        )}
        {/* {data?.nearbyLocationsAndOtherFacility?.[0]?.other && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              {data?.nearbyLocationsAndOtherFacility?.[0]?.other}
            </span>
          </div>
        )} */}
        {data?.otherFacility?.[0]?.LaundryOrDryCleaning && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Laundry Or Dry Cleaning
            </span>
          </div>
        )}
        {data?.otherFacility?.[0]?.cafeteriaCanteen && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Cafeteria
            </span>
          </div>
        )}
        {data?.otherFacility?.[0]?.cctvSecurity && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">cctv</span>
          </div>
        )}
        {data?.otherFacility?.[0]?.commmunalSharedKitchen && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Commmunal Shared Kitchen
            </span>
          </div>
        )}
        {data?.otherFacility?.[0]?.facilitiesForDisabled && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Facilities For Disabled
            </span>
          </div>
        )}
        {data?.otherFacility?.[0]?.maintenanceStaff && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Maintenance Staff
            </span>
          </div>
        )}
        {data?.otherFacility?.[0]?.other && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              {data?.otherFacility?.[0]?.other}
            </span>
          </div>
        )}
        {data?.otherFacility?.[0]?.petPolicy && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Pet Policy {data?.otherFacility?.[0]?.petPolicy}
            </span>
          </div>
        )}
        {data?.otherFacility?.[0]?.securityStaff && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Security Staff
            </span>
          </div>
        )}
        {data?.room?.[0]?.Bathrooms && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Washrooms {data?.room?.[0]?.Bathrooms}
            </span>
          </div>
        )}
        {data?.room?.[0]?.Bedrooms && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Bedrooms {data?.room?.[0]?.Bedrooms}
            </span>
          </div>
        )}
        {data?.room?.[0]?.DiningRoom && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Dining Room
            </span>
          </div>
        )}
        {data?.room?.[0]?.DrawingRoom && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Drawing Room
            </span>
          </div>
        )}
        {data?.room?.[0]?.gym && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">gym</span>
          </div>
        )}
        {data?.room?.[0]?.kitchens && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Kitchens {data?.room?.[0]?.kitchens}
            </span>
          </div>
        )}
        {data?.room?.[0]?.laundryRoom && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Laundry Room
            </span>
          </div>
        )}
        {data?.room?.[0]?.loungeOrSittingRoom && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Lounge Or Sitting Room
            </span>
          </div>
        )}
        {data?.room?.[0]?.otherRooms && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Other Rooms {data?.room?.[0]?.otherRooms}
            </span>
          </div>
        )}
        {data?.room?.[0]?.rooms && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Rooms {data?.room?.[0]?.rooms}
            </span>
          </div>
        )}
        {data?.room?.[0]?.servantQuarters && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Servant Quarters {data?.room?.[0]?.servantQuarters}
            </span>
          </div>
        )}
        {data?.room?.[0]?.steamRoom && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Steam Room
            </span>
          </div>
        )}
        {data?.room?.[0]?.storeRoom && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Store Room {data?.room?.[0]?.storeRoom}
            </span>
          </div>
        )}
        {data?.room?.[0]?.studyRoom && (
          <div className="flex items-center gap-4">
            <img src={TickIcon} alt="" />
            <span className="text-[#1D2939] font-medium text-base">
              Study Room
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesAndAmenities;
