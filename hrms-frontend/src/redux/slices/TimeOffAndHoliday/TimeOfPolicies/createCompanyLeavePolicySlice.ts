import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createCompanyLeavePolicyType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createCompanyLeavePolicyType = {
  data: null,
  loading: false,
  error: null,
};

const createCompanyLeavePolicySlice = createSlice({
  name: "createCompanyLeavePolicySlice",
  initialState,
  reducers: {
    createCompanyLeavePolicy(state) {
      state.loading = true;
    },
    createCompanyLeavePolicySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createCompanyLeavePolicyFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createCompanyLeavePolicy, createCompanyLeavePolicySuccess, createCompanyLeavePolicyFailure } =
createCompanyLeavePolicySlice.actions;

export default createCompanyLeavePolicySlice.reducer;
