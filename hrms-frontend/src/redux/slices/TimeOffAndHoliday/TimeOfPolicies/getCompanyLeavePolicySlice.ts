import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCompanyRoleType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCompanyRoleType = {
  data: null,
  loading: false,
  error: null,
};

const getCompanyLeavePolicySlice = createSlice({
  name: "getCompanyLeavePolicySlice",
  initialState,
  reducers: {
    getCompanyLeavePolicy(state) {
      state.loading = true;
    },
    getCompanyLeavePolicySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCompanyLeavePolicyFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    getCompanyLeavePolicy,
    getCompanyLeavePolicySuccess,
    getCompanyLeavePolicyFailure,
} = getCompanyLeavePolicySlice.actions;
export default getCompanyLeavePolicySlice.reducer;
