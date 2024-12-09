import * as XLSX from "xlsx";
export function isFunction(functionToCheck: () => void) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

export const downloadExcelFile = (data: any, title: any) => {
  const workSheet = XLSX.utils.json_to_sheet(data);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, title);
  // Generate buffer
  XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
  // Binary string
  XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
  XLSX.writeFile(workBook, `${title}.xlsx`);
};
export function getSubCategoryByName(subCategoryName: string) {
  const subCategory: any = {
    House: 1,
    Flat: 2,
    "Upper Portion": 3,
    "Lower Portion": 4,
    "Farm House": 5,
    Room: 6,
    Penthouse: 7,
    "Residential Plot": 8,
    "Commercial Plot": 9,
    "Agricultural Land": 10,
    "Industrial Land": 11,
    "Plot File": 12,
    "Plot Form": 13,
    Office: 14,
    Shop: 15,
    Warehouse: 16,
    Factory: 17,
    Building: 18,
    Other: 19,
  };
  for (const key in subCategory) {
    if (key === subCategoryName) {
      return subCategory[key];
    }
  }
}

const columns: any = {
  createFeatureDto: [
    "buildInYear_createFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Build In Years",
    "view_createFeatureDto-text-1,2,3,4,5,14,15-View",
    "parkingSpaces_createFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Parking Spaces",
    "doubleGazedWindow_createFeatureDto-bool-1,2,3,4,5,14-Double GazedWindow",
    "centralAirConditioning_createFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Air Conditioning",
    "centralHeating_createFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Heating",
    "flooring_createFeatureDto-select-1,2,3,4,5,14,15,16,18,19-Flooring",
    "otherMainFeatures_createFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Main Features",
    "furnished_createFeatureDto-bool-1,2,3,4,5,14-Furnished",
    "lift_createFeatureDto-bool-17,18,19-Lift",
    "elevators_createFeatureDto-text-2,14,15,18,19-Elevators",
    "floorsInBuilding_createFeatureDto-text-2,3,14,15,18,19-Floors In Building",
    "serviceElevatorsInBuilding_createFeatureDto-bool-2,14,15,18,19-Service Elevators In Building",
    "lobbyInBuilding_createFeatureDto-bool-2,14,18,19-Lobby In Building",
    "publicParking_createFeatureDto-bool-18,19-Public Parking",
    "underGroundParking_createFeatureDto-bool-18,19-Under Ground Parking",
    "numberOfUnit_createFeatureDto-text-18-Number Of Unit",
    "electricityBackup_createFeatureDto-select-1,2,3,4,5,14,15,16,17,18,19-Electricity Backup",
    "wasteDispsal_createFeatureDto-bool-1,2,3,4,5,14,15,16,17,18,19-Waste Dispsal",
    "floors_createFeatureDto-number-1,2,3,4,5,14,15,16,17-Floors",
  ],
  createBusinessAndCommunicationDto: [
    "broadbandInternetAccess_createBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Broadband Internet Access",
    "satellite_createBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Satellite",
    "businessCenter_createBusinessAndCommunicationDto-bool-2,14,18,19-Business Center",
    "conferenceInBuilding_createBusinessAndCommunicationDto-bool-2,14,18,19-Conference In Building",
    "atmMachine_createBusinessAndCommunicationDto-bool-2,14,15,18,19-Atm Machine",
    "intercom_createBusinessAndCommunicationDto-bool-1,2,3,4,5,14,18,19-Intercom",
    "otherBusinessAndComunication_createBusinessAndCommunicationDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Business And Comunication",
  ],
  createOtherFacilityDto: [
    "maintenanceStaff_createOtherFacilityDto-bool-1,2,3,4,5,14,15,16,17,18,19-Maintenance Staff",
    "securityStaff_createOtherFacilityDto-bool-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Security Staff",
    "LaundryOrDryCleaning_createOtherFacilityDto-bool-2,18,19-Laundry Or Dry Cleaning",
    "commmunalSharedKitchen_createOtherFacilityDto-bool-2-Commmunal Shared Kitchen",
    "facilitiesForDisabled_createOtherFacilityDto-bool-1,2,3,4,5,14,17,18,19-Facilities For Disabled",
    "petPolicy_createOtherFacilityDto-select-2,14,18,19-Pet Policy",
    "cctvSecurity_createOtherFacilityDto-bool-19-Cctv Security",
    "cafeteriaCanteen_createOtherFacilityDto-19-Cafeteria Canteen",
    "other_createOtherFacilityDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other",
  ],
  createHealthCareRecreationalDto: [
    "sauna_createHealthCareRecreationalDto-bool-1,2,3,4,5-Sauna",
    "jacuzzi_createHealthCareRecreationalDto-bool-1,2,3,4,5-Jacuzzi",
    "lawnOrGarden_createHealthCareRecreationalDto-bool-1,3,4,5,14,17-Lawn Or Garden",
    "swimmingPool_createHealthCareRecreationalDto-bool-1,3,4,5-Swimming Pool",
    "other_createHealthCareRecreationalDto-text-1,2,3,4,5,14,17-Other",
  ],
  createOtherNearByLocationDto: [
    "nearbySchools_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Schools",
    "nearbyHospitals_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Hospitals",
    "nearbyShoppingMalls_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Shopping Malls",
    "nearbyRestaurants_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Restaurants",
    "distanceFromAirport_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Distance From Airport",
    "nearbyTransport_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Transport",
    "other_createOtherNearByLocationDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other",
  ],
  createRoomDto: [
    "DrawingRoom_createRoomDto-bool-1,2,3,4,5-Drawing Room",
    "DiningRoom_createRoomDto-bool-1,2,3,4,5-Dining Room",
    "studyRoom_createRoomDto-bool-1,2,3,4,5-Study Room",
    "prayerRoom_createRoomDto-bool-1,2,3,4,5-Prayer Room",
    "powderRoom_createRoomDto-bool-1,2,3,4,5-Powder Room",
    "gym_createRoomDto-bool-1,2,3,4,5-Gym",
    "steamRoom_createRoomDto-bool-1,2,3,4,5-Steam Room",
    "loungeOrSittingRoom_createRoomDto-bool-1,2,3,4,5-Lounge Or Sitting Room",
    "laundryRoom_createRoomDto-bool-1,2,3,4,5-Laundry Room",
    "Bedrooms_createRoomDto-text-1,2,3,4,5-Bedrooms",
    "Bathrooms_createRoomDto-text-1,2,3,4,5-Bathrooms",
    "servantQuarters_createRoomDto-text-1,2,3,4,5,14-Servant Quarters",
    "kitchens_createRoomDto-text-1,2,3,4,5-Kitchens",
    "storeRoom_createRoomDto-text-1,2,3,4,5-Store Room",
    "otherRooms_createRoomDto-text-1,2,3,4,5,14,15,16-Other Rooms",
    "rooms-text_createRoomDto-14,15,16-Rooms",
  ],
  createPlotFeatureDto: [
    "possesion_createPlotFeatureDto-bool-8,9,10-Possesion",
    "disputed_createPlotFeatureDto-bool-8,9,10-Disputed",
    "electricity_createPlotFeatureDto-bool-8,10-Electricity",
    "suiGas_createPlotFeatureDto-bool-8,9,10-Sui Gas",
    "irrigation_createPlotFeatureDto-bool-10-Irrigation",
    "accessibleByRoad_createPlotFeatureDto-10-Accessible By Road",
    "tubeWells_createPlotFeatureDto-bool-10-Tube Wells",
    "perimeterFencing_createPlotFeatureDto-bool-10-Perimeter Fencing",
    "landFertility_createPlotFeatureDto-bool-10-Land Fertility",
    "bounaryLines_createPlotFeatureDto-bool-10-Bounary Lines",
    "bounaryWall_createPlotFeatureDto-bool-8,9-Bounary Wall",
    "corner-bool_createPlotFeatureDto-8,9-Corner",
    "parkFacing_createPlotFeatureDto-bool-8,9-Park Facing",
    "file_createPlotFeatureDto-bool-8,9-File",
    "balloted_createPlotFeatureDto-bool-8,9-Balloted",
    "sewerage_createPlotFeatureDto-bool-8,9-Sewerage",
    "waterSupply_createPlotFeatureDto-bool-8,9-Water Supply",
    "nearByWaterResources_createPlotFeatureDto-text-10-Near By Water Resources",
    "otherLandFeature_createPlotFeatureDto-text-10-Other Land Feature",
  ],

  createProductFeatureDto: [
    "buildInYear_createProductFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Build In Years",
    "view_createProductFeatureDto-text-1,2,3,4,5,14,15-View",
    "parkingSpaces_createProductFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Parking Spaces",
    "doubleGazedWindow_createProductFeatureDto-bool-1,2,3,4,5,14-Double GazedWindow",
    "centralAirConditioning_createProductFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Air Conditioning",
    "centralHeating_createProductFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Heating",
    "flooring_createProductFeatureDto-select-1,2,3,4,5,14,15,16,18,19-Flooring",
    "otherMainFeatures_createProductFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Main Features",
    "furnished_createProductFeatureDto-bool-1,2,3,4,5,14-Furnished",
    "lift_createProductFeatureDto-bool-17,18,19-Lift",
    "elevators_createProductFeatureDto-text-2,14,15,18,19-Elevators",
    "floorsInBuilding_createProductFeatureDto-text-2,3,14,15,18,19-Floors In Building",
    "serviceElevatorsInBuilding_createProductFeatureDto-bool-2,14,15,18,19-Service Elevators In Building",
    "lobbyInBuilding_createProductFeatureDto-bool-2,14,18,19-Lobby In Building",
    "publicParking_createProductFeatureDto-bool-18,19-Public Parking",
    "underGroundParking_createProductFeatureDto-bool-18,19-Under Ground Parking",
    "numberOfUnit_createProductFeatureDto-text-18-Number Of Unit",
    "electricityBackup_createProductFeatureDto-select-1,2,3,4,5,14,15,16,17,18,19-Electricity Backup",
    "wasteDispsal_createProductFeatureDto-bool-1,2,3,4,5,14,15,16,17,18,19-Waste Dispsal",
    "floors_createProductFeatureDto-number-1,2,3,4,5,14,15,16,17-Floors",
  ],
  createProductBusinessAndCommunicationDto: [
    "broadbandInternetAccess_createProductBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Broadband Internet Access",
    "satellite_createProductBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Satellite",
    "businessCenter_createProductBusinessAndCommunicationDto-bool-2,14,18,19-Business Center",
    "conferenceInBuilding_createProductBusinessAndCommunicationDto-bool-2,14,18,19-Conference In Building",
    "atmMachine_createProductBusinessAndCommunicationDto-bool-2,14,15,18,19-Atm Machine",
    "intercom_createProductBusinessAndCommunicationDto-bool-1,2,3,4,5,14,18,19-Intercom",
    "otherBusinessAndComunication_createProductBusinessAndCommunicationDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Business And Comunication",
  ],
  createProductOtherFacilityDto: [
    "maintenanceStaff_createProductOtherFacilityDto-bool-1,2,3,4,5,14,15,16,17,18,19-Maintenance Staff",
    "securityStaff_createProductOtherFacilityDto-bool-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Security Staff",
    "LaundryOrDryCleaning_createProductOtherFacilityDto-bool-2,18,19-Laundry Or Dry Cleaning",
    "commmunalSharedKitchen_createProductOtherFacilityDto-bool-2-Commmunal Shared Kitchen",
    "facilitiesForDisabled_createProductOtherFacilityDto-bool-1,2,3,4,5,14,17,18,19-Facilities For Disabled",
    "petPolicy_createProductOtherFacilityDto-select-2,14,18,19-Pet Policy",
    "cctvSecurity_createProductOtherFacilityDto-bool-19-Cctv Security",
    "cafeteriaCanteen_createProductOtherFacilityDto-19-Cafeteria Canteen",
    "other_createProductOtherFacilityDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other",
  ],
  createProductHealthCareRecreationalDto: [
    "sauna_createProductHealthCareRecreationalDto-bool-1,2,3,4,5-Sauna",
    "jacuzzi_createProductHealthCareRecreationalDto-bool-1,2,3,4,5-Jacuzzi",
    "lawnOrGarden_createProductHealthCareRecreationalDto-bool-1,3,4,5,14,17-Lawn Or Garden",
    "swimmingPool_createProductHealthCareRecreationalDto-bool-1,3,4,5-Swimming Pool",
    "other_createProductHealthCareRecreationalDto-text-1,2,3,4,5,14,17-Other",
  ],
  createProductOtherNearByLocationDto: [
    "nearbySchools_createProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Schools",
    "nearbyHospitals_createProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Hospitals",
    "nearbyShoppingMalls_createProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Shopping Malls",
    "nearbyRestaurants_createProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Restaurants",
    "distanceFromAirport_createProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Distance From Airport",
    "nearbyTransport_createProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Transport",
    "other_createProductOtherNearByLocationDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other",
  ],
  createProductRoomDto: [
    "DrawingRoom_createProductRoomDto-bool-1,2,3,4,5-Drawing Room",
    "DiningRoom_createProductRoomDto-bool-1,2,3,4,5-Dining Room",
    "studyRoom_createProductRoomDto-bool-1,2,3,4,5-Study Room",
    "prayerRoom_createProductRoomDto-bool-1,2,3,4,5-Prayer Room",
    "powderRoom_createProductRoomDto-bool-1,2,3,4,5-Powder Room",
    "gym_createProductRoomDto-bool-1,2,3,4,5-Gym",
    "steamRoom_createProductRoomDto-bool-1,2,3,4,5-Steam Room",
    "loungeOrSittingRoom_createProductRoomDto-bool-1,2,3,4,5-Lounge Or Sitting Room",
    "laundryRoom_createProductRoomDto-bool-1,2,3,4,5-Laundry Room",
    "Bedrooms_createProductRoomDto-text-1,2,3,4,5-Bedrooms",
    "Bathrooms_createProductRoomDto-text-1,2,3,4,5-Bathrooms",
    "servantQuarters_createProductRoomDto-text-1,2,3,4,5,14-Servant Quarters",
    "kitchens_createProductRoomDto-text-1,2,3,4,5-Kitchens",
    "storeRoom_createProductRoomDto-text-1,2,3,4,5-Store Room",
    "otherRooms_createProductRoomDto-text-1,2,3,4,5,14,15,16-Other Rooms",
    "rooms-text_createProductRoomDto-14,15,16-Rooms",
  ],
  createProductPlotFeatureDto: [
    "possesion_createProductPlotFeatureDto-bool-8,9,10-Possesion",
    "disputed_createProductPlotFeatureDto-bool-8,9,10-Disputed",
    "electricity_createProductPlotFeatureDto-bool-8,10-Electricity",
    "suiGas_createProductPlotFeatureDto-bool-8,9,10-Sui Gas",
    "irrigation_createProductPlotFeatureDto-bool-10-Irrigation",
    "accessibleByRoad_createProductPlotFeatureDto-10-Accessible By Road",
    "tubeWells_createProductPlotFeatureDto-bool-10-Tube Wells",
    "perimeterFencing_createProductPlotFeatureDto-bool-10-Perimeter Fencing",
    "landFertility_createProductPlotFeatureDto-bool-10-Land Fertility",
    "bounaryLines_createProductPlotFeatureDto-bool-10-Bounary Lines",
    "bounaryWall_createProductPlotFeatureDto-bool-8,9-Bounary Wall",
    "corner-bool_createProductPlotFeatureDto-8,9-Corner",
    "parkFacing_createProductPlotFeatureDto-bool-8,9-Park Facing",
    "file_createProductPlotFeatureDto-bool-8,9-File",
    "balloted_createProductPlotFeatureDto-bool-8,9-Balloted",
    "sewerage_createProductPlotFeatureDto-bool-8,9-Sewerage",
    "waterSupply_createProductPlotFeatureDto-bool-8,9-Water Supply",
    "nearByWaterResources_createProductPlotFeatureDto-text-10-Near By Water Resources",
    "otherLandFeature_createProductPlotFeatureDto-text-10-Other Land Feature",
  ],
};

export function getOptionsOfSelectByName(name: any) {
  const options: any = {
    flooring_createFeatureDto: [
      { label: "Tiles", value: "Tiles" },
      { label: "Marble", value: "Marble" },
      { label: "Wooden", value: "Wooden" },
      { label: "Chip", value: "Chip" },
      { label: "Cement", value: "Cement" },
    ],
    flooring_createProductFeatureDto: [
      { label: "Tiles", value: "Tiles" },
      { label: "Marble", value: "Marble" },
      { label: "Wooden", value: "Wooden" },
      { label: "Chip", value: "Chip" },
      { label: "Cement", value: "Cement" },
    ],
    electricityBackup_createFeatureDto: [
      { label: "Generator", value: "Generator" },
      { label: "Solar", value: "Solar" },
      { label: "Ups", value: "Ups" },
      { label: "none", value: "none" },
    ],
    electricityBackup_createProductFeatureDto: [
      { label: "Generator", value: "Generator" },
      { label: "Solar", value: "Solar" },
      { label: "Ups", value: "Ups" },
      { label: "none", value: "none" },
    ],
    petPolicy_createOtherFacilityDto: [
      { label: "Allowed", value: "Allowed" },
      { label: "Not Allowed", value: "Not Allowed" },
    ],
    petPolicy_createProductOtherFacilityDto: [
      { label: "Allowed", value: "Allowed" },
      { label: "Not Allowed", value: "Not Allowed" },
    ],
  };

  return options[name];
}

export function getSectionFromCategory(sectionName: any, subCategoryId: any) {
  return columns[sectionName]
    .map((item: any) => {
      const [name, type, categoriesIds, label] = item.split("-");
      if (
        categoriesIds
          .split(",")
          .map((id: any) => Number(id))
          .includes(subCategoryId)
      ) {
        return {
          label,
          name,
          type,
        };
      }
    })
    .filter((item: any) => item !== undefined);
}
export function calculateTotalAmount(
  discountPercentage: any,
  noOfMonth: any,
  hotlistingPrice: any,
  userLimitPrice: any,
  listingPrice: any,
  websitePrice: any,
  websiteSetupPrice: any,
  fixedCommission: any,
  appointmentPrice: any,
  StandardFee: any,
) {
  const convertedDiscount: any = (100 - discountPercentage) / 100;
  return parseInt(
    convertedDiscount *
      noOfMonth *
      (userLimitPrice +
        listingPrice +
        hotlistingPrice +
        websitePrice +
        appointmentPrice +
        StandardFee) +
      websiteSetupPrice,
  );
}
