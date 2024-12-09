import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uploadExcelwithCampaignName {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: uploadExcelwithCampaignName = {
  data: null,
  loading: false,
  error: null,
};

const uploadExcelwithCampaignNameSlice = createSlice({
  name: "uploadExcelwithCampaignName",
  initialState,
  reducers: {
    uploadExcelwithCampaignName(state) {
      state.loading = true;
    },
    uploadExcelwithCampaignNameSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    uploadExcelwithCampaignNameFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  uploadExcelwithCampaignName,
  uploadExcelwithCampaignNameSuccess,
  uploadExcelwithCampaignNameFailure,
} = uploadExcelwithCampaignNameSlice.actions;

export default uploadExcelwithCampaignNameSlice.reducer;
