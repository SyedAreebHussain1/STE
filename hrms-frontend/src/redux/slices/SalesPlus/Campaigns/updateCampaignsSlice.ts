import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateCampaignsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateCampaignsType = {
  data: null,
  loading: false,
  error: null,
};

const updateCampaignsSlice = createSlice({
  name: "updateCampaignsSlice",
  initialState,
  reducers: {
    updateCampaigns(state) {
      state.loading = true;
    },
    updateCampaignsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateCampaignsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateCampaigns(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateCampaigns,
  updateCampaignsSuccess,
  updateCampaignsFailure,
  clearUpdateCampaigns,
} = updateCampaignsSlice.actions;

export default updateCampaignsSlice.reducer;
