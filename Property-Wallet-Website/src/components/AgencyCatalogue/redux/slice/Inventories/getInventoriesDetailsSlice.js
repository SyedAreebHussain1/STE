import { createSlice } from "@reduxjs/toolkit";

export const getInventoriesDetailsSlice = createSlice({
  name: "getInventoriesDetailsSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    allPWProjectList: null,
    allCatalogueDetailByAgencyId: null,
    loading: false,
    error: null,
  },
  reducers: {
    getInventoriesDetails: (state) => {
      state.loading = true;
    },
    getInventoriesDetailsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getInventoriesDetailsFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getAllPWProjectListSuccess: (state, action) => {
      state.allPWProjectList = action.payload;
    },
    getCatalogueDetailByAgencyIdSuccess: (state, action) => {
      state.allCatalogueDetailByAgencyId = action.payload;
    },
  },
});

export const {
  getInventoriesDetails,
  getInventoriesDetailsSuccess,
  getInventoriesDetailsFailure,
  getAllPWProjectListSuccess,
  getCatalogueDetailByAgencyIdSuccess,
} = getInventoriesDetailsSlice.actions;

export default getInventoriesDetailsSlice.reducer;
