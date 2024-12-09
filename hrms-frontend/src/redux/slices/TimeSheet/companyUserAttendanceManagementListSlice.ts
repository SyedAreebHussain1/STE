import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyUserAttendanceManagementListType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CompanyUserAttendanceManagementListType = {
  data: null,
  loading: false,
  error: null,
};

const companyUserAttendanceManagementListSlice = createSlice({
  name: "companyUserAttendanceManagementListSlice",
  initialState,
  reducers: {
    companyUserAttendanceManagementList(state) {
      state.loading = true;
    },
    companyUserAttendanceManagementListSuccess(
      state,
      action: PayloadAction<any>,
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    companyUserAttendanceManagementListFailure(
      state,
      action: PayloadAction<any>,
    ) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCompanyUserAttendanceManagement(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  companyUserAttendanceManagementList,
  companyUserAttendanceManagementListSuccess,
  companyUserAttendanceManagementListFailure,
  clearCompanyUserAttendanceManagement,
} = companyUserAttendanceManagementListSlice.actions;

export default companyUserAttendanceManagementListSlice.reducer;
