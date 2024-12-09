import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getTotalLeadAndLeadSourceByCampaignId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getTotalLeadAndLeadSourceByCampaignId = {
  data: null,
  loading: false,
  error: null,
};

const getTotalLeadAndLeadSourceByCampaignIdSlice = createSlice({
  name: "getTotalLeadAndLeadSourceByCampaignId",
  initialState,
  reducers: {
    getTotalLeadAndLeadSourceByCampaignId(state) {
      state.loading = true;
    },
    getTotalLeadAndLeadSourceByCampaignIdSuccess(
      state,
      action: PayloadAction<any>
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    getTotalLeadAndLeadSourceByCampaignIdFailure(
      state,
      action: PayloadAction<any>
    ) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getTotalLeadAndLeadSourceByCampaignId,
  getTotalLeadAndLeadSourceByCampaignIdSuccess,
  getTotalLeadAndLeadSourceByCampaignIdFailure,
} = getTotalLeadAndLeadSourceByCampaignIdSlice.actions;

export default getTotalLeadAndLeadSourceByCampaignIdSlice.reducer;
