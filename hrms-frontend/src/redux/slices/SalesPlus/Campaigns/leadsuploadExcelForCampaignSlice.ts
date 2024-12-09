import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LeadsuploadExcelForCampaignType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: LeadsuploadExcelForCampaignType = {
  data: null,
  loading: false,
  error: null,
};

const leadsuploadExcelForCampaignSlice = createSlice({
  name: "leadsuploadExcelForCampaignSlice",
  initialState,
  reducers: {
    leadsuploadExcelForCampaign(state) {
      state.loading = true;
    },
    leadsuploadExcelForCampaignSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    leadsuploadExcelForCampaignFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearLeadsuploadExcelForCampaign(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  leadsuploadExcelForCampaign,
  leadsuploadExcelForCampaignSuccess,
  leadsuploadExcelForCampaignFailure,
  clearLeadsuploadExcelForCampaign,
} = leadsuploadExcelForCampaignSlice.actions;

export default leadsuploadExcelForCampaignSlice.reducer;
