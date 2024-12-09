import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetStagesByCampaignIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetStagesByCampaignIdType = {
  data: null,
  loading: false,
  error: null,
};

const getStagesByCampaignIdSlice = createSlice({
  name: "getStagesByCampaignIdSlice",
  initialState,
  reducers: {
    getStagesByCampaignId(state) {
      state.loading = true;
    },
    getStagesByCampaignIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getStagesByCampaignIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getStagesByCampaignId,
  getStagesByCampaignIdSuccess,
  getStagesByCampaignIdFailure,
} = getStagesByCampaignIdSlice.actions;

export default getStagesByCampaignIdSlice.reducer;
