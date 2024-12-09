import React from "react";
import Container from "../../../../components/Container";
import DocumentPreviewer from "../../../../components/DocumentPreviewer";

const InventoryDetailsSection = ({ data }) => {
  return (
    <div>
      <Container>
        <div className="mb-[3.25rem]">
          <h2 className="text-[#191F2B] text-[2rem] font-bold mb-2">
            PKR {data?.data?.inventory?.[0]?.price || "-"}
          </h2>
          <h3 className="text-[#344054] font-semibold text-[1.75rem]">
            {data?.data?.projectName || "-"}
          </h3>
          <p className="text-[#667085] text-lg">
            {data?.data?.address || "-"}, {data?.data.city || "-"}
          </p>
        </div>
        <div className="mb-[3.25rem]">
          <h3 className="text-[#191F2B] text-2xl font-semibold">Description</h3>
          <p className="text-[#667085] text-lg leading-[1.814rem] mt-2 max-w-[1003px]">
            {data?.data?.inventory?.[0]?.description || "-"}
          </p>
        </div>
        <div className="mb-[3.25rem]">
          <h3 className="text-[#191F2B] text-2xl font-semibold">Features</h3>
          <div className="flex gap-x-12 gap-y-5 flex-wrap">
            <div className="flex gap-2 items-center mt-3">
              <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
              <p className="text-[#667085] text-lg font-medium">
                Area Size:{" "}
                <span className="text-[#3F4E4F] font-semibold">
                  {data?.data?.inventory?.[0]?.landSize}{" "}
                  {data?.data?.inventory?.[0]?.landArea?.title}
                </span>
              </p>
            </div>
            {data?.data?.inventory?.[0]?.room[0]?.Bedrooms && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Bedrooms:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.room[0]?.Bedrooms}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.washRooms && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Washrooms:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.washRooms}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room[0]?.kitchens && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Kitchens:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.room[0]?.kitchens}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature[0]?.lift && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Lift:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature[0]?.electricity && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Electricity:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature[0]?.waterSupply && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Water:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature[0]?.suiGas && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Gas: <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.multiFace[0]?.facing?.title && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Facing:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.multiFace[0]?.facing?.title}
                  </span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.otherFacility[0]?.cctvSecurity && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  CCTV:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
              ?.atmMachine && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  ATM Machine:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
              ?.broadbandInternetAccess && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Broadband Internet Access:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
              ?.businessCenter && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Business Center:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
              ?.conferenceInBuilding && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Conference In Building:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
              ?.intercom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Intercom:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
              ?.otherBusinessAndComunication && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Other Business And Comunication:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
                        ?.otherBusinessAndComunication
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.businessAndCommunication?.[0]
              ?.satellite && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Satellite:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.buildInYear && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Build In Year:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.buildInYear}
                  </span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.feature?.[0]
              ?.centralAirConditioning && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Central Air Conditioning:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.centralHeating && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Central Air Conditioning:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.doubleGazedWindow && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Double Gazed Window:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.electricityBackup && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Electricity Backup:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]?.feature?.[0]
                        ?.electricityBackup
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.elevators && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Elevators:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.elevators}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.flooring && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Flooring:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.flooring}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.floors && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Floors:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.floors}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.floorsInBuilding && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Floors In Building:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.floorsInBuilding}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.furnished && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Furnished:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.feature?.[0]?.lobbyInBuilding && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Lobby In Building:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.numberOfUnit && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Number Of Unit:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.numberOfUnit}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.otherMainFeatures && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Other Main Features:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]?.feature?.[0]
                        ?.otherMainFeatures
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.parkingSpaces && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Parking Spaces:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.parkingSpaces}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.publicParking && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Public Parking:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]
              ?.serviceElevatorsInBuilding && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Service Elevators In Building:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.underGroundParking && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Under Ground Parking:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.view && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  View:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.feature?.[0]?.view}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.feature?.[0]?.wasteDispsal && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Waste Dispsal:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.healthcareRecreational?.[0]
              ?.jacuzzi && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Jacuzzi:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.healthcareRecreational?.[0]
              ?.lawnOrGarden && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Lawn Or Garden:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.healthcareRecreational?.[0]?.other && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Other:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]?.healthcareRecreational?.[0]
                        ?.other
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.healthcareRecreational?.[0]?.sauna && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Sauna:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.healthcareRecreational?.[0]
              ?.swimmingPool && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Swimming Pool:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.landArea?.leadCount && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Lead Count:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.landArea?.leadCount}
                  </span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.nearbyLocationsAndOtherFacility?.[0]
              ?.distanceFromAirport && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Distance From Airport:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]
                        ?.nearbyLocationsAndOtherFacility?.[0]
                        ?.distanceFromAirport
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.nearbyLocationsAndOtherFacility?.[0]
              ?.nearbyHospitals && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Nearby Hospitals:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]
                        ?.nearbyLocationsAndOtherFacility?.[0]?.nearbyHospitals
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.nearbyLocationsAndOtherFacility?.[0]
              ?.nearbyRestaurants && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Nearby Restaurants:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]
                        ?.nearbyLocationsAndOtherFacility?.[0]
                        ?.nearbyRestaurants
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.nearbyLocationsAndOtherFacility?.[0]
              ?.nearbySchools && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Nearby Schools:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]
                        ?.nearbyLocationsAndOtherFacility?.[0]?.nearbySchools
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.nearbyLocationsAndOtherFacility?.[0]
              ?.nearbyShoppingMalls && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Nearby Shopping Malls:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]
                        ?.nearbyLocationsAndOtherFacility?.[0]
                        ?.nearbyShoppingMalls
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.nearbyLocationsAndOtherFacility?.[0]
              ?.nearbyTransport && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Nearby Transport:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]
                        ?.nearbyLocationsAndOtherFacility?.[0]?.nearbyTransport
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.nearbyLocationsAndOtherFacility?.[0]
              ?.other && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Other:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]
                        ?.nearbyLocationsAndOtherFacility?.[0]?.other
                    }
                  </span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.otherFacility?.[0]
              ?.LaundryOrDryCleaning && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Laundry Or Dry Cleaning:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.otherFacility?.[0]
              ?.cafeteriaCanteen && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Cafeteria Canteen:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.otherFacility?.[0]
              ?.commmunalSharedKitchen && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Commmunal Shared Kitchen:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.otherFacility?.[0]
              ?.facilitiesForDisabled && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Facilities For Disabled:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.otherFacility?.[0]
              ?.maintenanceStaff && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Maintenance Staff:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.otherFacility?.[0]?.other && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Other:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.otherFacility?.[0]?.other}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.otherFacility?.[0]?.petPolicy && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Pet Policy:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.otherFacility?.[0]?.securityStaff && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Security Staff:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.accessibleByRoad && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Accessible By Road:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.balloted && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Balloted:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.bounaryLines && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Bounary Lines:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.bounaryWall && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Bounary Wall:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.corner && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Corner:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.disputed && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Disputed:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.file && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  File:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.irrigation && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Irrigation:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.landFertility && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Land Fertility:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]
              ?.nearByWaterResources && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Nearby Water Resources:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]?.plotFeature?.[0]
                        ?.nearByWaterResources
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.otherLandFeature && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Other Land Feature:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {
                      data?.data?.inventory?.[0]?.plotFeature?.[0]
                        ?.otherLandFeature
                    }
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.parkFacing && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Park Facing:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.perimeterFencing && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Perimeter Fencing:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.perimeterFencing && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Perimeter Fencing:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.possesion && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Possesion:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.sewerage && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Sewerage:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.plotFeature?.[0]?.tubeWells && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Tube Wells:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.room?.[0]?.Bathrooms && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Bathrooms:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.room?.[0]?.Bathrooms}
                  </span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.room?.[0]?.DiningRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Dining Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.DrawingRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Drawing Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.gym && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  gym: <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}

            {data?.data?.inventory?.[0]?.room?.[0]?.laundryRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Laundry Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.loungeOrSittingRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Lounge Or Sitting Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.otherRooms && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Other Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.room?.[0]?.otherRooms}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.powderRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Powder Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.prayerRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Prayer Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.rooms && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Rooms:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.room?.[0]?.rooms}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.servantQuarters && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Servant Quarters:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.room?.[0]?.servantQuarters}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.steamRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Steam Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.storeRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Store Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">
                    {data?.data?.inventory?.[0]?.room?.[0]?.storeRoom}
                  </span>
                </p>
              </div>
            )}
            {data?.data?.inventory?.[0]?.room?.[0]?.studyRoom && (
              <div className="flex gap-2 items-center mt-3">
                <div className="w-[10px] h-[10px] bg-[#6C47FF] rounded-full" />
                <p className="text-[#667085] text-lg font-medium">
                  Study Room:{" "}
                  <span className="text-[#3F4E4F] font-semibold">Yes</span>
                </p>
              </div>
            )}
          </div>
        </div>
        {data?.data?.projectDocument?.length > 0 && (
          <div className="mb-[3.25rem]">
            <h3 className="text-[#191F2B] text-2xl font-semibold mb-2">
              Attachments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data?.data?.projectDocument?.map((item) => {
                return (
                  <DocumentPreviewer
                    fileName={item?.doc?.split("/").at(-1).split("-")[1]}
                    url={item?.doc}
                  />
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default InventoryDetailsSection;
