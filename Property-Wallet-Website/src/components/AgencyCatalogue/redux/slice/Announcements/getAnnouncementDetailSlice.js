import { createSlice } from "@reduxjs/toolkit";

export const getAnnouncementDetailSlice = createSlice({
  name: "getAnnouncementDetailSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAnnouncementDetail: (state) => {
      state.loading = true;
    },
    getAnnouncementDetailSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAnnouncementDetailFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAnnouncementDetail,
  getAnnouncementDetailSuccess,
  getAnnouncementDetailFailure,
} = getAnnouncementDetailSlice.actions;

export default getAnnouncementDetailSlice.reducer;
