import { createSlice } from "@reduxjs/toolkit";

export const getAgencyDetailsSlice = createSlice({
  name: "getAgencyDetailsSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAgencyDetails: (state) => {
      state.loading = true;
    },
    getAgencyDetailsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAgencyDetailsFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAgencyDetails,
  getAgencyDetailsSuccess,
  getAgencyDetailsFailure,
} = getAgencyDetailsSlice.actions;

export default getAgencyDetailsSlice.reducer;
