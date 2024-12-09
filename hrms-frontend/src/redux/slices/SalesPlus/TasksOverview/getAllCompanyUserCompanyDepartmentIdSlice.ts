import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllCompanyUserCompanyDepartmentIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllCompanyUserCompanyDepartmentIdType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCompanyUserCompanyDepartmentIdSlice = createSlice({
  name: "getAllCompanyUserCompanyDepartmentIdSlice",
  initialState,
  reducers: {
    getAllCompanyUserCompanyDepartmentId(state) {
      state.loading = true;
    },
    getAllCompanyUserCompanyDepartmentIdSuccess(
      state,
      action: PayloadAction<any>,
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCompanyUserCompanyDepartmentIdFailure(
      state,
      action: PayloadAction<any>,
    ) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllCompanyUserCompanyDepartmentId(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const {
  getAllCompanyUserCompanyDepartmentId,
  getAllCompanyUserCompanyDepartmentIdSuccess,
  getAllCompanyUserCompanyDepartmentIdFailure,
  clearGetAllCompanyUserCompanyDepartmentId,
} = getAllCompanyUserCompanyDepartmentIdSlice.actions;

export default getAllCompanyUserCompanyDepartmentIdSlice.reducer;
