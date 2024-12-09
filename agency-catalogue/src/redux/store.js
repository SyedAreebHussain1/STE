import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getAnnouncementDetailSlice from "./slice/Announcements/getAnnouncementDetailSlice";
import getTeamDetailSlice from "./slice/MeetOurTeam/getTeamDetailSlice";
import getInventoriesDetailsSlice from "./slice/Inventories/getInventoriesDetailsSlice";
const rootSlices = combineReducers({
  getTeamDetail: getTeamDetailSlice,
  getAnnouncementDetail: getAnnouncementDetailSlice,
  getInventoriesDetail: getInventoriesDetailsSlice,
});

const store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  // non serial data issue fixed
  reducer: rootSlices,
});
export const resetState = () => {
  return rootSlices(undefined, {});
};

export default store;
