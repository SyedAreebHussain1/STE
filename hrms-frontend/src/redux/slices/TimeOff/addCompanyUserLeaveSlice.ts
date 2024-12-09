import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddCompanyUserLeaveType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddCompanyUserLeaveType = {
  data: null,
  loading: false,
  error: null,
};

const addCompanyUserLeaveSlice = createSlice({
  name: "addCompanyUserLeaveSlice",
  initialState,
  reducers: {
    addCompanyUserLeave(state) {
      state.loading = true;
    },
    addCompanyUserLeaveSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addCompanyUserLeaveFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAddCompanyUserLeave(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addCompanyUserLeave,
  addCompanyUserLeaveSuccess,
  addCompanyUserLeaveFailure,
  clearAddCompanyUserLeave,
} = addCompanyUserLeaveSlice.actions;

export default addCompanyUserLeaveSlice.reducer;
