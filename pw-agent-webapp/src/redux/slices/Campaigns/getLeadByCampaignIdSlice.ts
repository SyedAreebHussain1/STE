import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeadByCampaignId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeadByCampaignId = {
  data: null,
  loading: false,
  error: null,
};

const getLeadByCampaignIdSlice = createSlice({
  name: "getLeadByCampaignId",
  initialState,
  reducers: {
    getLeadByCampaignId(state) {
      state.loading = true;
    },
    getLeadByCampaignIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadByCampaignIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadByCampaignId,
  getLeadByCampaignIdSuccess,
  getLeadByCampaignIdFailure,
} = getLeadByCampaignIdSlice.actions;

export default getLeadByCampaignIdSlice.reducer;
