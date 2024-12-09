import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAgencyDetails {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAgencyDetails = {
  data: null,
  loading: false,
  error: null,
};

const getAgencyDetailsSlice = createSlice({
  name: "getAgencyDetails",
  initialState,
  reducers: {
    getAgencyDetails(state) {
      state.loading = true;
    },
    getAgencyDetailsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAgencyDetailsFailure(state, action: PayloadAction<any>) {
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
