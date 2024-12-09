import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadDataById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadDataById = {
  data: null,
  loading: false,
  error: null,
};

const getAllCampaignsSlice = createSlice({
  name: "getAllCampaignsSlice",
  initialState,
  reducers: {
    getAllCampaigns(state) {
      state.loading = true;
    },
    getAllCampaignsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCampaignsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCampaigns,
  getAllCampaignsSuccess,
  getAllCampaignsFailure,
} = getAllCampaignsSlice.actions;

export default getAllCampaignsSlice.reducer;
