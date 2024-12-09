import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LeadRemoveLeadPermissionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: LeadRemoveLeadPermissionType = {
  data: null,
  loading: false,
  error: null,
};

const leadRemoveLeadPermissionSlice = createSlice({
  name: "leadRemoveLeadPermissionSlice",
  initialState,
  reducers: {
    leadRemoveLeadPermission(state) {
      state.loading = true;
    },
    leadRemoveLeadPermissionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    leadRemoveLeadPermissionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  leadRemoveLeadPermission,
  leadRemoveLeadPermissionSuccess,
  leadRemoveLeadPermissionFailure,
} = leadRemoveLeadPermissionSlice.actions;

export default leadRemoveLeadPermissionSlice.reducer;
