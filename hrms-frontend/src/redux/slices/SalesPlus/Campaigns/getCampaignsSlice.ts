import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCampaignsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCampaignsType = {
  data: null,
  loading: false,
  error: null,
};

const getCampaignsSlice = createSlice({
  name: "getCampaignsSlice",
  initialState,
  reducers: {
    getCampaigns(state) {
      state.loading = true;
    },
    getCampaignsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCampaignsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetCampaigns(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const {
  getCampaigns,
  getCampaignsSuccess,
  getCampaignsFailure,
  clearGetCampaigns,
} = getCampaignsSlice.actions;

export default getCampaignsSlice.reducer;
