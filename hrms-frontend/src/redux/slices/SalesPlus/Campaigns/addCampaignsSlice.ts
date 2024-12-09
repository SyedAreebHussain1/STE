import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddCampaignsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddCampaignsType = {
  data: null,
  loading: false,
  error: null,
};

const addCampaignsSlice = createSlice({
  name: "addCampaignsSlice",
  initialState,
  reducers: {
    addCampaigns(state) {
      state.loading = true;
    },
    addCampaignsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addCampaignsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAddCampaigns(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addCampaigns,
  addCampaignsSuccess,
  addCampaignsFailure,
  clearAddCampaigns,
} = addCampaignsSlice.actions;

export default addCampaignsSlice.reducer;
