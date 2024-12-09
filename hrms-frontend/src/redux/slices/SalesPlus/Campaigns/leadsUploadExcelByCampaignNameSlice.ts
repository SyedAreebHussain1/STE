import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LeadsUploadExcelByCampaignNameType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: LeadsUploadExcelByCampaignNameType = {
  data: null,
  loading: false,
  error: null,
};

const leadsUploadExcelByCampaignNameSlice = createSlice({
  name: "leadsUploadExcelByCampaignNameSlice",
  initialState,
  reducers: {
    leadsUploadExcelByCampaignName(state) {
      state.loading = true;
    },
    leadsUploadExcelByCampaignNameSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    leadsUploadExcelByCampaignNameFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearLeadsUploadExcelByCampaignName(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  leadsUploadExcelByCampaignName,
  leadsUploadExcelByCampaignNameSuccess,
  leadsUploadExcelByCampaignNameFailure,
  clearLeadsUploadExcelByCampaignName,
} = leadsUploadExcelByCampaignNameSlice.actions;

export default leadsUploadExcelByCampaignNameSlice.reducer;
