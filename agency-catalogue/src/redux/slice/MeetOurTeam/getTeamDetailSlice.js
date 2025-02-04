import { createSlice } from "@reduxjs/toolkit";

export const getTeamDetailSlice = createSlice({
  name: "getTeamDetailSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getTeamDetail: (state) => {
      state.loading = true;
    },
    getTeamDetailSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getTeamDetailFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getTeamDetail, getTeamDetailSuccess, getTeamDetailFailure } =
  getTeamDetailSlice.actions;

export default getTeamDetailSlice.reducer;
