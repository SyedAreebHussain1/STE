import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateCompanyLeavePolicyType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateCompanyLeavePolicyType = {
  data: null,
  loading: false,
  error: null,
};

const updateCompanyLeavePolicySlice = createSlice({
  name: "updateCompanyLeavePolicySlice",
  initialState,
  reducers: {
    updateCompanyLeavePolicy(state) {
      state.loading = true;
    },
    updateCompanyLeavePolicySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateCompanyLeavePolicyFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateCompanyLeavePolicy,
  updateCompanyLeavePolicySuccess,
  updateCompanyLeavePolicyFailure,
} = updateCompanyLeavePolicySlice.actions;

export default updateCompanyLeavePolicySlice.reducer;
