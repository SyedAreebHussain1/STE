import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uploadExcelForExistingCampaign {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: uploadExcelForExistingCampaign = {
  data: null,
  loading: false,
  error: null,
};

const uploadExcelForExistingCampaignSlice = createSlice({
  name: "uploadExcelForExistingCampaign",
  initialState,
  reducers: {
    uploadExcelForExistingCampaign(state) {
      state.loading = true;
    },
    uploadExcelForExistingCampaignSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    uploadExcelForExistingCampaignFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  uploadExcelForExistingCampaign,
  uploadExcelForExistingCampaignSuccess,
  uploadExcelForExistingCampaignFailure,
} = uploadExcelForExistingCampaignSlice.actions;

export default uploadExcelForExistingCampaignSlice.reducer;
