export function renameFile(originalFile, newName) {
  return new File([originalFile], newName, {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
}
export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function getSubCategoryByName(subCategoryName) {
  const subCategory = {
    House: 1,
    Flat: 2,
    "Upper Portion": 3,
    "Lower Portion": 4,
    "Farm House": 5,
    Room: 6,
    "Pent House": 7,
    "Residential Plot": 8,
    "Commercial Plot": 9,
    "Agricultual Land": 10,
    "Industial Land": 11,
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

const columns = {
  createFeature: [
    "buildInYear_createFeature-text-1,2,3,4,5,14,15,16,17,18,19-Build In Years",
    "view_createFeature-text-1,2,3,4,5,14,15-View",
    "parkingSpaces_createFeature-text-1,2,3,4,5,14,15,16,17,18,19-Parking Spaces",
    "doubleGazedWindow_createFeature-bool-1,2,3,4,5,14-Double GazedWindow",
    "centralAirConditioning_createFeature-bool-1,2,3,4,5,14,15,16,18,19-Central Air Conditioning",
    "centralHeating_createFeature-bool-1,2,3,4,5,14,15,16,18,19-Central Heating",
    "flooring_createFeature-select-1,2,3,4,5,14,15,16,18,19-Flooring",
    "otherMainFeatures_createFeature-text-1,2,3,4,5,14,15,16,17,18,19-Other Main Features",
    "furnished_createFeature-bool-1,2,3,4,5,14-Furnished",
    "lift_createFeature-bool-17,18,19-Lift",
    "elevators_createFeature-text-2,14,15,18,19-Elevators",
    "floorsInBuilding_createFeature-text-2,3,14,15,18,19-Floors In Building",
    "serviceElevatorsInBuilding_createFeature-bool-2,14,15,18,19-Service Elevators In Building",
    "lobbyInBuilding_createFeature-bool-2,14,18,19-Lobby In Building",
    "publicParking_createFeature-bool-18,19-Public Parking",
    "underGroundParking_createFeature-bool-18,19-Under Ground Parking",
    "numberOfUnit_createFeature-text-18-Number Of Unit",
    "electricityBackup_createFeature-select-1,2,3,4,5,14,15,16,17,18,19-Electricity Backup",
    "wasteDispsal_createFeature-bool-1,2,3,4,5,14,15,16,17,18,19-Waste Dispsal",
    "floors_createFeature-number-1,2,3,4,5,14,15,16,17-Floors",
  ],
  createBusinessAndCommunication: [
    "broadbandInternetAccess_createBusinessAndCommunication-bool-1,2,3,4,5,14,15,16,17,18,19-Broadband Internet Access",
    "satellite_createBusinessAndCommunication-bool-1,2,3,4,5,14,15,16,17,18,19-Satellite",
    "businessCenter_createBusinessAndCommunication-bool-2,14,18,19-Business Center",
    "conferenceInBuilding_createBusinessAndCommunication-bool-2,14,18,19-Conference In Building",
    "atmMachine_createBusinessAndCommunication-bool-2,14,15,18,19-Atm Machine",
    "intercom_createBusinessAndCommunication-bool-1,2,3,4,5,14,18,19-Intercom",
    "otherBusinessAndComunication_createBusinessAndCommunication-text-1,2,3,4,5,14,15,16,17,18,19-Other Business And Comunication",
  ],
  createOtherFacility: [
    "maintenanceStaff_createOtherFacility-bool-1,2,3,4,5,14,15,16,17,18,19-Maintenance Staff",
    "securityStaff_createOtherFacility-bool-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Security Staff",
    "LaundryOrDryCleaning_createOtherFacility-bool-2,18,19-Laundry Or Dry Cleaning",
    "commmunalSharedKitchen_createOtherFacility-bool-2-Commmunal Shared Kitchen",
    "facilitiesForDisabled_createOtherFacility-bool-1,2,3,4,5,14,17,18,19-Facilities For Disabled",
    "petPolicy_createOtherFacility-select-2,14,18,19-Pet Policy",
    "cctvSecurity_createOtherFacility-bool-19-Cctv Security",
    "cafeteriaCanteen_createOtherFacility-19-Cafeteria Canteen",
    "other_createOtherFacility-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other",
  ],
  createHealthcareRecreational: [
    "sauna_createHealthcareRecreational-bool-1,2,3,4,5-Sauna",
    "jacuzzi_createHealthcareRecreational-bool-1,2,3,4,5-Jacuzzi",
    "lawnOrGarden_createHealthcareRecreational-bool-1,3,4,5,14,17-Lawn Or Garden",
    "swimmingPool_createHealthcareRecreational-bool-1,3,4,5-Swimming Pool",
    "other_createHealthcareRecreational-text-1,2,3,4,5,14,17-Other",
  ],
  createNearbyLocationsAndOtherFacility: [
    "nearbySchools_createNearbyLocationsAndOtherFacility-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Schools",
    "nearbyHospitals_createNearbyLocationsAndOtherFacility-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Hospitals",
    "nearbyShoppingMalls_createNearbyLocationsAndOtherFacility-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Shopping Malls",
    "nearbyRestaurants_createNearbyLocationsAndOtherFacility-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Restaurants",
    "distanceFromAirport_createNearbyLocationsAndOtherFacility-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Distance From Airport",
    "nearbyTransport_createNearbyLocationsAndOtherFacility-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Transport",
    "other_createNearbyLocationsAndOtherFacility-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other",
  ],
  createRoom: [
    "DrawingRoom_createRoom-bool-1,2,3,4,5-Drawing Room",
    "DiningRoom_createRoom-bool-1,2,3,4,5-Dining Room",
    "studyRoom_createRoom-bool-1,2,3,4,5-Study Room",
    "prayerRoom_createRoom-bool-1,2,3,4,5-Prayer Room",
    "powderRoom_createRoom-bool-1,2,3,4,5-Powder Room",
    "gym_createRoom-bool-1,2,3,4,5-Gym",
    "steamRoom_createRoom-bool-1,2,3,4,5-Steam Room",
    "loungeOrSittingRoom_createRoom-bool-1,2,3,4,5-Lounge Or Sitting Room",
    "laundryRoom_createRoom-bool-1,2,3,4,5-Laundry Room",
    "Bedrooms_createRoom-text-1,2,3,4,5-Bedrooms",
    "Bathrooms_createRoom-text-1,2,3,4,5-Bathrooms",
    "servantQuarters_createRoom-text-1,2,3,4,5,14-Servant Quarters",
    "kitchens_createRoom-text-1,2,3,4,5-Kitchens",
    "storeRoom_createRoom-text-1,2,3,4,5-Store Room",
    "otherRooms_createRoom-text-1,2,3,4,5,14,15,16-Other Rooms",
    "rooms-text_createRoom-14,15,16-Rooms",
  ],
  createPlotFeature: [
    "possesion_createPlotFeature-bool-8,9,10-Possesion",
    "disputed_createPlotFeature-bool-8,9,10-Disputed",
    "electricity_createPlotFeature-bool-8,10-Electricity",
    "suiGas_createPlotFeature-bool-8,9,10-Sui Gas",
    "irrigation_createPlotFeature-bool-10-Irrigation",
    "accessibleByRoad_createPlotFeature-10-Accessible By Road",
    "tubeWells_createPlotFeature-bool-10-Tube Wells",
    "perimeterFencing_createPlotFeature-bool-10-Perimeter Fencing",
    "landFertility_createPlotFeature-bool-10-Land Fertility",
    "bounaryLines_createPlotFeature-bool-10-Bounary Lines",
    "bounaryWall_createPlotFeature-bool-8,9-Bounary Wall",
    "corner-bool_createPlotFeature-8,9-Corner",
    "parkFacing_createPlotFeature-bool-8,9-Park Facing",
    "file_createPlotFeature-bool-8,9-File",
    "balloted_createPlotFeature-bool-8,9-Balloted",
    "sewerage_createPlotFeature-bool-8,9-Sewerage",
    "waterSupply_createPlotFeature-bool-8,9-Water Supply",
    "nearByWaterResources_createPlotFeature-text-10-Near By Water Resources",
    "otherLandFeature_createPlotFeature-text-10-Other Land Feature",
  ],
};

export function getOptionsOfSelectByName(name) {
  const options = {
    flooring_createFeature: [
      { label: "Tiles", value: "Tiles" },
      { label: "Marble", value: "Marble" },
      { label: "Wooden", value: "Wooden" },
      { label: "Chip", value: "Chip" },
      { label: "Cement", value: "Cement" },
    ],
    electricityBackup_createFeature: [
      { label: "Generator", value: "Generator" },
      { label: "Solar", value: "Solar" },
      { label: "Ups", value: "Ups" },
      { label: "none", value: "none" },
    ],
    petPolicy_createOtherFacility: [
      { label: "Allowed", value: "Allowed" },
      { label: "Not Allowed", value: "Not Allowed" },
    ],
  };

  return options[name];
}

export function getSectionFromCategory(sectionName, subCategoryId) {
  return columns[sectionName]
    .map((item) => {
      const [name, type, categoriesIds, label] = item.split("-");
      if (
        categoriesIds
          .split(",")
          .map((id) => Number(id))
          .includes(subCategoryId)
      ) {
        return {
          label,
          name,
          type,
        };
      }
    })
    .filter((item) => item !== undefined);
}

export function getQueryParamValue(url, paramName) {
  const params = new URLSearchParams(url.slice(url.indexOf("?")));
  return params.get(paramName);
}

export function calculateTotalAmount(
  discountPercentage,
  noOfMonth,
  hotlistingPrice,
  userLimitPrice,
  listingPrice,
  websitePrice,
  websiteSetupPrice,
  fixedCommission,
  appointmentPrice,
  StandardFee
) {
  const convertedDiscount = (100 - discountPercentage) / 100;
  // return parseInt(
  //   convertedDiscount *
  //     noOfMonth *
  //     (userLimitPrice + listingPrice + hotlistingPrice) +
  //     noOfMonth * websitePrice +
  //     fixedCommission +
  //     websiteSetupPrice +
  //     noOfMonth * appointmentPrice
  // );
  return parseInt(
    convertedDiscount *
      noOfMonth *
      (userLimitPrice +
        listingPrice +
        hotlistingPrice +
        websitePrice +
        appointmentPrice +
        StandardFee) +
      websiteSetupPrice
  );
}
