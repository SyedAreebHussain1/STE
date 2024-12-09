import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createNewCampaign {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createNewCampaign = {
  data: null,
  loading: false,
  error: null,
};

const createNewCampaignSlice = createSlice({
  name: "createNewCampaign",
  initialState,
  reducers: {
    createNewCampaign(state) {
      state.loading = true;
    },
    createNewCampaignSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createNewCampaignFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createNewCampaign,
  createNewCampaignSuccess,
  createNewCampaignFailure,
} = createNewCampaignSlice.actions;

export default createNewCampaignSlice.reducer;
