import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetCampaignsByAgencyIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCampaignsByAgencyIdType = {
  data: null,
  loading: false,
  error: null,
};

const getCampaignsByAgencyIdSlice = createSlice({
  name: "getCampaignsByAgencyIdSlice",
  initialState,
  reducers: {
    getCampaignsByAgencyId(state) {
      state.loading = true;
    },
    getCampaignsByAgencyIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCampaignsByAgencyIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetCampaignsByAgencyId(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getCampaignsByAgencyId,
  getCampaignsByAgencyIdSuccess,
  getCampaignsByAgencyIdFailure,
  clearGetCampaignsByAgencyId,
} = getCampaignsByAgencyIdSlice.actions;

export default getCampaignsByAgencyIdSlice.reducer;
