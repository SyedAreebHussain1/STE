import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCUAssignLeavePoliciesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCUAssignLeavePoliciesType = {
  data: null,
  loading: false,
  error: null,
};

const getCUAssignLeavePoliciesSlice = createSlice({
  name: "getCUAssignLeavePoliciesSlice",
  initialState,
  reducers: {
    getCUAssignLeavePolicies(state) {
      state.loading = true;
    },
    getCUAssignLeavePoliciesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCUAssignLeavePoliciesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetCUAssignLeavePolicies(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCUAssignLeavePolicies,
  getCUAssignLeavePoliciesSuccess,
  getCUAssignLeavePoliciesFailure,
  clearGetCUAssignLeavePolicies,
} = getCUAssignLeavePoliciesSlice.actions;

export default getCUAssignLeavePoliciesSlice.reducer;
