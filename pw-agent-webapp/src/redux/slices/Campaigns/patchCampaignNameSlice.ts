import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface patchCampaignName {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: patchCampaignName = {
  data: null,
  loading: false,
  error: null,
};

const patchCampaignNameSlice = createSlice({
  name: "patchCampaignName",
  initialState,
  reducers: {
    patchCampaignName(state) {
      state.loading = true;
    },
    patchCampaignNameSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    patchCampaignNameFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  patchCampaignName,
  patchCampaignNameSuccess,
  patchCampaignNameFailure,
} = patchCampaignNameSlice.actions;

export default patchCampaignNameSlice.reducer;
