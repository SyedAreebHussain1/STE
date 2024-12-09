import { createSlice } from "@reduxjs/toolkit";

export const getInventoryDetailsForPublicSlice = createSlice({
  name: "getInventoryDetailsForPublicSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    projectById: null,
    loading: false,
    error: null,
  },
  reducers: {
    getInventoryDetailsForPublic: (state) => {
      state.loading = true;
    },
    getInventoryDetailsForPublicSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getInventoryDetailsForPublicFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getProjectByIdpublicSuccess: (state, action) => {
      state.projectById = action.payload;
    },
  },
});

export const {
  getInventoryDetailsForPublic,
  getInventoryDetailsForPublicSuccess,
  getInventoryDetailsForPublicFailure,
  getProjectByIdpublicSuccess,
} = getInventoryDetailsForPublicSlice.actions;

export default getInventoryDetailsForPublicSlice.reducer;
