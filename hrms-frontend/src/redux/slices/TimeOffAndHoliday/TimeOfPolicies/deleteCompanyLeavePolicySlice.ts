import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteCompanyLeavePolicyType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteCompanyLeavePolicyType = {
  data: null,
  loading: false,
  error: null,
};

const deleteCompanyLeavePolicySlice = createSlice({
  name: "deleteCompanyLeavePolicySlice",
  initialState,
  reducers: {
    deleteCompanyLeavePolicy(state) {
      state.loading = true;
    },
    deleteCompanyLeavePolicySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteCompanyLeavePolicyFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteCompanyLeavePolicy,
  deleteCompanyLeavePolicySuccess,
  deleteCompanyLeavePolicyFailure,
} = deleteCompanyLeavePolicySlice.actions;

export default deleteCompanyLeavePolicySlice.reducer;
