import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetLeadsByCampaignIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadsByCampaignIdType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadsByCampaignIdSlice = createSlice({
  name: "getLeadsByCampaignIdSlice",
  initialState,
  reducers: {
    getLeadsByCampaignId(state) {
      state.loading = true;
    },
    getLeadsByCampaignIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadsByCampaignIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetLeadsByCampaignId(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getLeadsByCampaignId,
  getLeadsByCampaignIdSuccess,
  getLeadsByCampaignIdFailure,
  cleargetLeadsByCampaignId,
} = getLeadsByCampaignIdSlice.actions;

export default getLeadsByCampaignIdSlice.reducer;
