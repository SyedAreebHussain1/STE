import { createSlice } from "@reduxjs/toolkit";

export const getMeetingListSlice = createSlice({
  name: "getMeetingListSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getMeetingList: (state) => {
      state.loading = true;
    },
    getMeetingListSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getMeetingListFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearMeetingList: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const { getMeetingList, getMeetingListSuccess, getMeetingListFailure, clearMeetingList } =
  getMeetingListSlice.actions;

export default getMeetingListSlice.reducer;
