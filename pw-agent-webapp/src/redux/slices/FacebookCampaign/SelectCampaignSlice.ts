import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectCampaign {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: SelectCampaign = {
  data: null,
  loading: false,
  error: null,
};

const SelectCampaignSlice = createSlice({
  name: "SelectCampaign",
  initialState,
  reducers: {
    SelectCampaign(state) {
      state.loading = true;
    },
    SelectCampaignSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    SelectCampaignFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    ClearSelectCampaign(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  SelectCampaign,
  SelectCampaignSuccess,
  SelectCampaignFailure,
  ClearSelectCampaign,
} = SelectCampaignSlice.actions;

export default SelectCampaignSlice.reducer;
