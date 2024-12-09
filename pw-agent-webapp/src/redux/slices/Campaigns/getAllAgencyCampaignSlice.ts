import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllAgencyCampaign {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllAgencyCampaign = {
  data: null,
  loading: false,
  error: null,
};

const getAllAgencyCampaignSlice = createSlice({
  name: "getAllAgencyCampaign",
  initialState,
  reducers: {
    getAllAgencyCampaign(state) {
      state.loading = true;
    },
    getAllAgencyCampaignSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllAgencyCampaignFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllAgencyCampaign,
  getAllAgencyCampaignSuccess,
  getAllAgencyCampaignFailure,
} = getAllAgencyCampaignSlice.actions;

export default getAllAgencyCampaignSlice.reducer;
