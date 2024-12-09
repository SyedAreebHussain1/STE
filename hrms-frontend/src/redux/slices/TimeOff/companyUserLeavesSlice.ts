import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCompanyUsersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCompanyUsersType = {
  data: null,
  loading: false,
  error: null,
};

const companyUserLeavesSlice = createSlice({
  name: "companyUserLeavesSlice",
  initialState,
  reducers: {
    companyUserLeaves(state) {
      state.loading = true;
    },
    companyUserLeavesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    companyUserLeavesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCompanyUserLeaves(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  companyUserLeaves,
  companyUserLeavesSuccess,
  companyUserLeavesFailure,
  clearCompanyUserLeaves,
} = companyUserLeavesSlice.actions;

export default companyUserLeavesSlice.reducer;
