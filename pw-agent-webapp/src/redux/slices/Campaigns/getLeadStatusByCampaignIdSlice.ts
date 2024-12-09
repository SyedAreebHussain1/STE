import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeadStatusByCampaignId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeadStatusByCampaignId = {
  data: null,
  loading: false,
  error: null,
};

const getLeadStatusByCampaignIdSlice = createSlice({
  name: "getLeadStatusByCampaignId",
  initialState,
  reducers: {
    getLeadStatusByCampaignId(state) {
      state.loading = true;
    },
    getLeadStatusByCampaignIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadStatusByCampaignIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadStatusByCampaignId,
  getLeadStatusByCampaignIdSuccess,
  getLeadStatusByCampaignIdFailure,
} = getLeadStatusByCampaignIdSlice.actions;

export default getLeadStatusByCampaignIdSlice.reducer;
