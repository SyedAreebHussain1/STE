import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetCampaignsIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCampaignsIdType = {
  data: null,
  loading: false,
  error: null,
};

const getCampaignsIdSlice = createSlice({
  name: "getCampaignsIdSlice",
  initialState,
  reducers: {
    getCampaignsId(state) {
      state.loading = true;
    },
    getCampaignsIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCampaignsIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetCampaignsId(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getCampaignsId,
  getCampaignsIdSuccess,
  getCampaignsIdFailure,
  clearGetCampaignsId,
} = getCampaignsIdSlice.actions;

export default getCampaignsIdSlice.reducer;
